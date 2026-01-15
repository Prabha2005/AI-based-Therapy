def generate_response(message: str, age_group: str) -> str:
    msg = message.lower()

    # ---------- CHILD (5–10) ----------
    if age_group == "5-10":
        if any(w in msg for w in ["lonely", "alone", "sad"]):
            return (
                "I’m sorry you feel this way. "
                "You are safe here. "
                "Would you like to tell me what made you feel sad?"
            )

    # ---------- TEEN (11–17) ----------
    if age_group == "11-17":
        if any(w in msg for w in ["lonely", "alone"]):
            return (
                "Feeling lonely can be really hard, especially at your age. "
                "You’re not weak for feeling this way. "
                "Is this happening mostly at school or at home?"
            )

        if any(w in msg for w in ["bullied", "bullying"]):
            return (
                "I’m really sorry you’re experiencing this. "
                "Bullying can deeply hurt. "
                "Do you want to talk about who is doing this?"
            )

    # ---------- ADULT (18–40) ----------
    if age_group == "18-40":
        if any(w in msg for w in ["stress", "overwhelmed"]):
            return (
                "It sounds like a lot is on your plate right now. "
                "Let’s slow down for a moment. "
                "What’s the biggest thing stressing you today?"
            )

    # ---------- 41+ ----------
    if age_group == "41+":
        if any(w in msg for w in ["tired", "worried"]):
            return (
                "It sounds like you’ve been carrying a lot. "
                "You deserve care and understanding. "
                "Would you like to share what’s been weighing on you?"
            )

    # ---------- DEFAULT ----------
    return (
        "I’m here with you. "
        "Please feel free to share more about what you’re feeling."
    )
