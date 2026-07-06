from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv
import requests

from database import Base, engine
from routers import auth, users, chatbot, journal

app = FastAPI(
    title="AI-Based Therapy Assistant",
    version="1.0.0"
)


# ---------------- ENV ----------------
load_dotenv()

HF_API_TOKEN = os.getenv("HF_API_TOKEN")
HF_MODEL_URL = "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium"

headers = {
    "Authorization": f"Bearer {HF_API_TOKEN}"
}

# ---------------- AI ROUTER ----------------
router = APIRouter()

class ChatRequest(BaseModel):
    message: str
    history: list = []

@router.post("/chat")
def chat_with_ai(request: ChatRequest):
    try:
        # ---------- Emotion Extraction from History ----------
        emotions = []
        for msg in request.history:
            text = msg["text"].lower()
            if "lonely" in text:
                emotions.append("lonely")
            if "anxious" in text or "anxiety" in text:
                emotions.append("anxious")
            if "sad" in text:
                emotions.append("sad")
            if "stress" in text:
                emotions.append("stressed")

        emotion_context = ""
        if emotions:
            unique_emotions = ", ".join(set(emotions))
            emotion_context = f"The user has previously mentioned feeling {unique_emotions}. "

        # ---------- Prompt Construction ----------
        prompt = (
            "You are an empathetic and supportive mental health assistant. "
            "Your role is to listen carefully, acknowledge emotions, and respond with kindness and understanding. "
            "Do NOT provide medical advice or diagnosis. "
            "Encourage the user gently to express their feelings.\n\n"
            f"{emotion_context}"
            f"User says: \"{request.message}\"\n"
            "Your response:"
        )

        payload = {
            "inputs": prompt,
            "parameters": {
                "max_new_tokens": 150,
                "temperature": 0.9,
                "top_p": 0.95,
                "do_sample": True,
                "return_full_text": False
            }
        }

        # ---------- Hugging Face API Call ----------
        response = requests.post(
            HF_MODEL_URL,
            headers=headers,
            json=payload,
            timeout=20
        )

        result = response.json()

        # ---------- AI Reply Handling ----------
        if isinstance(result, list) and len(result) > 0 and "generated_text" in result[0]:
            reply = result[0]["generated_text"]
        else:
            reply = "I’m really glad you shared this. Would you like to tell me more?"

        # ---------- Button Suggestions ----------
        text = request.message.lower()

        if "lonely" in text:
            suggestions = [
                "Why do I feel lonely?",
                "I feel lonely most days",
                "I want coping tips"
            ]
        elif "anxious" in text or "anxiety" in text:
            suggestions = [
                "What causes my anxiety?",
                "I feel anxious at night",
                "How can I calm myself?"
            ]
        else:
            suggestions = [
                "Tell me more",
                "I want to understand my feelings",
                "What should I do next?"
            ]

        return {
            "reply": reply,
            "suggestions": suggestions
        }

    except Exception as e:
        print("HF ERROR:", e)
        return {
            "reply": "AI service is temporarily unavailable. Please try again.",
            "suggestions": []
        }

# ---------------- APP ----------------
app = FastAPI(
    title="AI-Based Therapy Assistant",
    version="1.0.0"
)

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Existing routers
app.include_router(auth.router)
app.include_router(users.router)
app.include_router(chatbot.router)
app.include_router(journal.router)
# AI router
app.include_router(router, prefix="/ai")

@app.get("/")
def root():
    return {"status": "Backend running"}
