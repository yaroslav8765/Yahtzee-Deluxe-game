from .database import Base
from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime

class Transactions(Base):
    __tablename__ = 'transactions'

    id         = Column(Integer, primary_key=True, index=True)
    value      = Column(Float)
    type       = Column(String)
    created_at = Column(DateTime, default=lambda: datetime.now())

