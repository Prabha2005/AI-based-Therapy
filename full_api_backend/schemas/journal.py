from pydantic import BaseModel
from datetime import datetime

class JournalCreate(BaseModel):
    content: str

class JournalOut(BaseModel):
    id: int
    content: str
    created_at: datetime

    class Config:
        orm_mode = True
