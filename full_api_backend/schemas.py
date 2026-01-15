from pydantic import BaseModel, EmailStr, Field

# ---------- AUTH SCHEMAS ----------

class UserCreate(BaseModel):
    email: EmailStr
    password: str = Field(min_length=6)

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    email: EmailStr

    class Config:
        from_attributes = True


# ---------- CHAT SCHEMA ----------

class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1)
