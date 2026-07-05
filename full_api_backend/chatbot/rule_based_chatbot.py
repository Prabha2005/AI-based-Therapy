#from chatbot.emotion_detector import detect_emotion
from chatbot.emotion_model import detect_emotion
# ==========================
# THERAPY RESPONSES
# ==========================

RESPONSES = {

    "stress": {

        "18-40": (
            "It sounds like a lot is on your plate right now. "
            "Let's slow down for a moment. "
            "What's the biggest thing stressing you today?"
        ),

        "11-17": (
            "School and growing up can feel overwhelming sometimes. "
            "Would you like to tell me what's causing your stress?"
        ),

        "5-10": (
            "It's okay to feel stressed sometimes. "
            "Can you tell me what happened today?"
        ),

        "41+": (
            "Life can bring many responsibilities. "
            "Would talking about what's worrying you help?"
        )

    },

    "lonely": {

        "18-40": (
            "Feeling lonely can be painful. "
            "Would you like to tell me when you started feeling this way?"
        ),

        "11-17": (
            "Feeling lonely at your age can be really difficult. "
            "Did something happen recently?"
        ),

        "5-10": (
            "I'm here with you. "
            "Would you like to tell me why you're feeling lonely?"
        ),

        "41+": (
            "Loneliness can affect anyone. "
            "I'm here to listen if you'd like to share."
        )

    },
    "happy": {

    "18-40": (
        "I'm really happy to hear you're feeling good today. "
        "What made today a positive day for you?"
    ),

    "11-17": (
        "That's wonderful! "
        "What happened today that made you feel happy?"
    ),

    "5-10": (
        "Yay! I'm glad you're happy today! "
        "Do you want to tell me what made you smile?"
    ),

    "41+": (
        "It's always nice to hear positive moments. "
        "Would you like to share what's going well?"
    )
},

"neutral": {

    "18-40": (
        "Thank you for sharing. "
        "Would you like to tell me more about how today has been?"
    ),

    "11-17": (
        "I'm here to listen. "
        "What's been on your mind today?"
    ),

    "5-10": (
        "Would you like to tell me about your day?"
    ),

    "41+": (
        "How has your day been so far?"
    )
},

}


EMOTION_MAP = {
    "fear": "stress",
    "anger": "stress",
    "disgust": "stress",
    "sadness": "lonely",
    "joy": "happy",
    "neutral": "neutral",
    "surprise": "neutral"
}

DEFAULT_RESPONSE = (
    "I'm here to listen. "
    "Please tell me more about how you're feeling."
)


# ==========================
# CHATBOT
# ==========================

def generate_response(message: str, age_group: str):

    emotion = detect_emotion(message)

    emotion = EMOTION_MAP.get(
    emotion,
    "neutral"
)

    if emotion in RESPONSES:

        if age_group in RESPONSES[emotion]:

            return RESPONSES[emotion][age_group]

    return DEFAULT_RESPONSE