# Simple in-memory conversation storage

conversation_memory = {}

def save_message(user_id, sender, message):
    if user_id not in conversation_memory:
        conversation_memory[user_id] = []

    conversation_memory[user_id].append({
        "sender": sender,
        "message": message
    })

    # Keep only last 10 messages
    conversation_memory[user_id] = conversation_memory[user_id][-10:]


def get_history(user_id):
    return conversation_memory.get(user_id, [])