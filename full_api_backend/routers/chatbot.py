from fastapi import APIRouter
from pydantic import BaseModel
from chatbot.rule_based_chatbot import generate_response
from chatbot.chat_memory import save_message, get_history

router = APIRouter(prefix="/chat", tags=["Chatbot"])


class ChatRequest(BaseModel):
    message: str
    ageGroup: str


@router.post("/")
def chat_with_user(request: ChatRequest):

    # Temporary user ID
    user_id = "demo_user"

    # Save user's message
    save_message(user_id, "user", request.message)

    # Generate chatbot response
    reply = generate_response(
        request.message,
        request.ageGroup
    )

    # Save bot's response
    save_message(user_id, "bot", reply)

    # Return response and chat history
    return {
        "reply": reply,
        "history": get_history(user_id)
    }
