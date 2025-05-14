from sqlalchemy import create_engine, text
from sqlalchemy.pool import StaticPool
from sqlalchemy.orm import sessionmaker
from ..database import Base
from ..main import app
from fastapi.testclient import TestClient
from ..routers.gambling import get_db
import pytest 
from ..models import Transactions
from fastapi import status

SQLALCHEMY_DATABESE_URL = "sqlite:///./testdb.db"

engine = create_engine(
    SQLALCHEMY_DATABESE_URL, 
    connect_args = {"check_same_thread":False},
    poolclass = StaticPool,

)

TestingSessionLocal = sessionmaker(autocommit = False, autoflush = False, bind = engine)
Base.metadata.create_all(bind = engine)

def override_get_db():
    db = TestingSessionLocal()
    try:
        yield db
    finally: 
        db.close()

app.dependency_overrides[get_db] = override_get_db


client = TestClient(app)

    
def test_roll_dices():
    for _ in range(100000):
        body = {"value": -10, "type": "Bet"}
        response = client.post("/gambling/roll_dices", json=body)

        print(f"Response JSON: {response.json()}")
        
        assert response.status_code == status.HTTP_200_OK
    
    new_balance = response.json()['new_balance']
    rtp = new_balance/1000000
    print(f"Old balance: {1000000}")
    print(f"New balance: {new_balance}")
    print(f"RTP: {rtp} %")
