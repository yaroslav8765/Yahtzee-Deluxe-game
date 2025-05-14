from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine
from .routers import gambling

app = FastAPI()

try:
    engine.connect()
    print("✅ Подключение успешно!")
except Exception as e:
    print(f"❌ Ошибка подключения: {e}")


origins = [
    "http://localhost",
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def health_check():
    return {"status" : "healthy"}

app.include_router(gambling.router)
