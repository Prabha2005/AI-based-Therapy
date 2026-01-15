from fastapi import APIRouter, Depends
from pydantic import BaseModel
from auth import get_current_user
from chatbot.rule_based_chatbot import generate_response

router = APIRouter(prefix="/chat", tags=["Chatbot"])

class ChatRequest(BaseModel):
    message: str
    ageGroup: str

@router.post("/")
def chat_with_user(
    request: ChatRequest,
    current_user=Depends(get_current_user)
):
    reply = generate_response(request.message)
    return {"reply": reply}

