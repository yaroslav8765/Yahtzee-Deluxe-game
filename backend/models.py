from .database import Base
from sqlalchemy import Column, Integer, String

class Transactions(Base):
    __tablename__ = 'transactions'

    id      = Column(Integer, primary_key=True, index=True)
    value   = Column(Integer)
    type    = Column(String)
