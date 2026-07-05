from transformers import pipeline

print("Loading emotion model...")

emotion_classifier = pipeline(
    "text-classification",
    model="j-hartmann/emotion-english-distilroberta-base",
    top_k=1
)

print("Emotion model loaded successfully.")


def detect_emotion(message: str):
    result = emotion_classifier(message)

    print("Emotion Result:", result)

    return result[0][0]["label"].lower()