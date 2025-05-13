from database import Base
from sqlalchemy import Column, Integer, String

class Users(Base):
    __tablename__ = 'users'

    id          = Column(Integer, primary_key=True, index=True)
    username    = Column(String, unique=True)
    balance     = Column(Integer)

class Transactions(Base):
    __tablename__ = 'transactions'

    id      = Column(Integer, primary_key=True, index=True)
    value   = Column(Integer)
    type    = Column(String)
