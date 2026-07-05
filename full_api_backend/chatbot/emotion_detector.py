def detect_emotion(message: str):

    message = message.lower()

    EMOTIONS = {

        "stress": [
            "stress",
            "stressed",
            "overwhelmed",
            "pressure",
            "exam",
            "deadline"
        ],

        "lonely": [
            "lonely",
            "alone",
            "isolated",
            "nobody",
            "miss someone"
        ],

        "sad": [
            "sad",
            "cry",
            "crying",
            "depressed",
            "down",
            "unhappy"
        ],

        "anxiety": [
            "anxiety",
            "anxious",
            "panic",
            "worried",
            "fear",
            "nervous"
        ],

        "happy": [
            "happy",
            "great",
            "good",
            "excited",
            "awesome"
        ]

    }

    for emotion, keywords in EMOTIONS.items():

        for keyword in keywords:

            if keyword in message:
                return emotion

    return "neutral"