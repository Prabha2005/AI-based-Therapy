from transformers import pipeline

# Load model once (important for performance)
chatbot_model = pipeline(
    "text-generation",
    model="facebook/blenderbot-400M-distill"
)

def generate_response(message: str) -> str:
    response = chatbot_model(message, max_length=60)
    return response[0]["generated_text"]
