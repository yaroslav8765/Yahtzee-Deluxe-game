from fastapi import FastAPI,APIRouter, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import random
from collections import Counter
from ..models import Base
from ..database import SessionLocal, engine
from typing import Annotated, Optional
from sqlalchemy.orm import Session
from ..models import Transactions

PAIR_COEFF = 1
FULL_HOUSE_COEFF = 2
YATHZEE_COEFF = 3
THREE_PAIRS_COEFF = 4
TEMP_USERS_BALANCE = 1000000

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

class TransactionRequest(BaseModel):
    value: int
    type: str


def roll_dices():
    return [random.randint(1, 6) for _ in range(6)]

@router.post("/roll_dices")
def roll_dices(db: db_dependancy, transactionRequest: TransactionRequest):
    global TEMP_USERS_BALANCE



    
    gambleResult = [random.randint(1, 6) for _ in range(6)]






    result = ""
    bet = transactionRequest.value
    TEMP_USERS_BALANCE -= abs(bet)

    transactionModel = Transactions(
        value = bet,
        type = "Bet"
    )

    db.add(transactionModel)
    db.commit() 

    counts = Counter(gambleResult)
    values = sorted(counts.values(), reverse=True)

    print(values)

    if values == [6]:
        bet = abs(bet * YATHZEE_COEFF)
        result = "yathzee"
    elif values == [4, 2]:
        bet = abs(bet * FULL_HOUSE_COEFF)
        result = "full_house"
    elif values == [2, 2, 2]:
        bet = abs(bet * THREE_PAIRS_COEFF)
        result = "three_pairs"
    elif any(v >= 2 for v in values):
        bet = abs(bet * PAIR_COEFF)
        result = "pair"
    else:
        result = "loose"
        bet = 0

    TEMP_USERS_BALANCE +=bet
        

    return {
            "dice1": gambleResult[0],
            "dice2": gambleResult[1],
            "dice3": gambleResult[2],
            "dice4": gambleResult[3],
            "dice5": gambleResult[4],
            "dice6": gambleResult[5],
            "new_balance": TEMP_USERS_BALANCE,
            "result": result
            }