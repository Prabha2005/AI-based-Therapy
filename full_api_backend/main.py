from fastapi import FastAPI, APIRouter, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv
import requests

from database import Base, engine
from routers import auth, users, journal

load_dotenv()

app = FastAPI(
    title="AI-Based Therapy Assistant",
    version="1.1.0"
)

HF_API_TOKEN = os.getenv("HF_API_TOKEN")

if not HF_API_TOKEN:
    print("WARNING: HF_API_TOKEN is not configured.")

HF_CHAT_URL = "https://router.huggingface.co/v1/chat/completions"

# Hugging Face currently supports provider-routed chat models.
HF_MODEL = "openai/gpt-oss-120b:fastest"

router = APIRouter()


class ChatRequest(BaseModel):
    message: str
    history: list = []


def detect_emotion(message: str) -> str:
    text = message.lower()

    emotion_keywords = {
        "stress": [
            "stress",
            "stressed",
            "overwhelmed",
            "pressure",
            "deadline",
            "exam",
        ],
        "lonely": [
            "lonely",
            "alone",
            "isolated",
            "nobody",
        ],
        "sad": [
            "sad",
            "cry",
            "crying",
            "down",
            "unhappy",
        ],
        "anxiety": [
            "anxiety",
            "anxious",
            "panic",
            "worried",
            "fear",
            "nervous",
        ],
        "happy": [
            "happy",
            "great",
            "good",
            "excited",
            "awesome",
        ],
    }

    for emotion, keywords in emotion_keywords.items():
        if any(keyword in text for keyword in keywords):
            return emotion

    return "neutral"


def get_fallback_response(emotion: str) -> str:
    responses = {
        "stress": (
            "It sounds like you may be under a lot of pressure right now. "
            "Would you like to tell me what is causing the most stress?"
        ),
        "lonely": (
            "Feeling lonely can be difficult. "
            "If you'd like, you can tell me more about what has been making you feel disconnected."
        ),
        "sad": (
            "I'm sorry you're having a difficult moment. "
            "Would you like to share what has been weighing on you?"
        ),
        "anxiety": (
            "It sounds like you're feeling anxious. "
            "We can talk through what is worrying you and take it one part at a time."
        ),
        "happy": (
            "I'm glad to hear that. "
            "What happened that made you feel this way?"
        ),
        "neutral": (
            "I'm here to listen. "
            "Tell me a little more about what you're experiencing."
        ),
    }

    return responses[emotion]


@router.post("/chat")
def chat_with_ai(request: ChatRequest):
    message = request.message.strip()

    if not message:
        raise HTTPException(
            status_code=400,
            detail="Message cannot be empty."
        )

    emotion = detect_emotion(message)

    history_text = []

    for item in request.history[-6:]:
        if isinstance(item, dict):
            text = item.get("text", "")
            sender = item.get("sender", "user")

            if text:
                history_text.append(
                    f"{sender}: {text}"
                )

    conversation_context = "\n".join(history_text)

    system_prompt = (
        "You are an empathetic emotional wellness assistant. "
        "Listen carefully and provide supportive, non-judgmental responses. "
        "Do not diagnose medical or mental health conditions. "
        "Do not prescribe medication or replace professional care. "
        "Keep responses concise and conversational. "
        "Respond in 2 to 4 short sentences and always finish the final sentence. "
        "Avoid long lists unless necessary. "
        "If someone appears to be in immediate danger, encourage them "
        "to contact local emergency services or a trusted person."
    )

    user_prompt = (
        f"Detected emotional context: {emotion}.\n"
        f"Recent conversation:\n{conversation_context}\n\n"
        f"User: {message}"
    )

    reply = None

    if HF_API_TOKEN:
        try:
            response = requests.post(
                HF_CHAT_URL,
                headers={
                    "Authorization": f"Bearer {HF_API_TOKEN}",
                    "Content-Type": "application/json",
                },
                json={
                    "model": HF_MODEL,
                    "messages": [
                        {
                            "role": "system",
                            "content": system_prompt,
                        },
                        {
                            "role": "user",
                            "content": user_prompt,
                        },
                    ],
                    "max_tokens": 500,
                    "temperature": 0.7,
                },
                timeout=30,
            )
            response.raise_for_status()

            result = response.json()

            reply = (
                result
                .get("choices", [{}])[0]
                .get("message", {})
                .get("content")
            )

        except Exception as error:
            print(
                "Hugging Face request failed:",
                str(error)
            )

    if not reply:
        reply = get_fallback_response(emotion)

    if emotion == "lonely":
        suggestions = [
            "Why might I feel lonely?",
            "How can I reconnect with people?",
            "I want to talk more",
        ]

    elif emotion == "anxiety":
        suggestions = [
            "Why am I feeling anxious?",
            "Help me understand my worry",
            "How can I calm down?",
        ]

    elif emotion == "stress":
        suggestions = [
            "Help me understand my stress",
            "I feel overwhelmed",
            "How can I organize my thoughts?",
        ]

    else:
        suggestions = [
            "Tell me more",
            "Help me understand my feelings",
            "I want to talk about this",
        ]

    return {
        "reply": reply,
        "emotion": emotion,
        "suggestions": suggestions,
        "ai_generated": bool(
            HF_API_TOKEN and reply != get_fallback_response(emotion)
        ),
    }


Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(users.router)
app.include_router(journal.router)

app.include_router(
    router,
    prefix="/ai",
    tags=["AI"]
)


@app.get("/")
def root():
    return {
        "status": "Backend running",
        "version": "1.1.0",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy",
        "huggingface_configured": bool(HF_API_TOKEN),
    }