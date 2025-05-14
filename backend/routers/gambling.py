from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
import random
from collections import Counter
from ..models import Base
from ..database import SessionLocal, engine
from typing import Annotated
from sqlalchemy.orm import Session
from sqlalchemy import func, text
from ..models import Transactions
from starlette import status

PAIR_COEFF = 0.8557133724715513
FULL_HOUSE_COEFF = PAIR_COEFF*2
YATHZEE_COEFF = PAIR_COEFF*3
THREE_PAIRS_COEFF = PAIR_COEFF*4

router = APIRouter(
    prefix = "/gambling",
    tags=["gambling"]
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependancy = Annotated[Session, Depends(get_db)]
Base.metadata.create_all(bind = engine)

class TransactionRequest(BaseModel):
    value: float
    type: str


def add_transaction(db: Session, value: float, type_: str):
    db.add(Transactions(value=value, type=type_))
    db.commit()

@router.post("/init")
def init(db: db_dependancy):
    db.execute(text("DROP TABLE IF EXISTS transactions"))
    db.commit()
    Base.metadata.create_all(bind = engine)

    add_transaction(db, 100, "Init")
    return {"pair_coef" : PAIR_COEFF}

@router.post("/roll_dices")
def roll_dices(db: db_dependancy, transactionRequest: TransactionRequest):
    if transactionRequest.type == "Bet":
        total = db.query(func.sum(Transactions.value)).scalar() or 0
        if total > 0 and transactionRequest.value < 0 and abs(transactionRequest.value) <= total:

            gambleResult = [random.randint(1, 6) for _ in range(6)]

            result = ""
            bet = transactionRequest.value

            add_transaction(db, bet, transactionRequest.type)


            counts = Counter(gambleResult)
            values = sorted(counts.values(), reverse=True)

            print(values)

            if values == [6]:
                bet = abs(bet * YATHZEE_COEFF)
                result = "yathzee"
                add_transaction(db, bet, "Win")

            elif values == [4, 2]:
                bet = abs(bet * FULL_HOUSE_COEFF)
                result = "full_house"
                add_transaction(db, bet, "Win")

            elif values == [2, 2, 2]:
                bet = abs(bet * THREE_PAIRS_COEFF)
                result = "three_pairs"
                add_transaction(db, bet, "Win")

            elif any(v >= 2 for v in values):
                bet = abs(bet * PAIR_COEFF)
                result = "pair"
                add_transaction(db, bet, "Win")

            else:
                result = "loose"
                bet = 0

            return {
                    "rolls": gambleResult,
                    "result": result
                    }
        else:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid bet: either insufficient balance or wrong bet value"
            )
    else:
        raise HTTPException(status_code = status.HTTP_400_BAD_REQUEST, detail = f"Invalid body") 
    
@router.get("/balance")
def get_balance(db:db_dependancy):
    total = db.query(func.sum(Transactions.value)).scalar() or 0
    return {"balance" : total}
