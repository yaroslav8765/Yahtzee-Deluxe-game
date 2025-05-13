from pydantic_settings import BaseSettings, SettingsConfigDict
import dotenv

dotenv.load_dotenv(verbose=True)

class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="allow",)
    SQLALCHEMY_DATABASE_URL: str

settings = Settings()


