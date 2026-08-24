# 🧠 AI Therapy Assistant

AI Therapy Assistant is a web-based mental wellness platform that provides users with a safe space to understand their emotions, reflect on their thoughts, and receive AI-assisted emotional support. The application combines mental health assessments, emotion-aware conversations, and personal reflection tools to encourage emotional well-being.

---

![Next.js](https://img.shields.io/badge/Next.js-React-black)
![FastAPI](https://img.shields.io/badge/FastAPI-Python-green)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 🌐 Live Demo

- **Frontend:** https://ai-based-therapy.vercel.app
- **Backend API:** https://ai-based-therapy-backend.onrender.com

---

## ✨ Features

- 🔐 Secure User Registration & Login (JWT Authentication)
- 🧠 Mental Health Self-Assessment
- 🤖 AI Therapy Chatbot
- 😊 Emotion-Aware Conversations
- 🤗 Hugging Face AI Integration
- 📝 Reflection Journal
- 📊 Assessment History
- 💙 Mood Check-In
- 👤 User Profile
- 📱 Responsive Design

---

## 🚀 How It Works

1. Create an account or log in.
2. Complete a mental health assessment.
3. Chat with the AI Therapy Assistant.
4. Record daily reflections in your journal.
5. Monitor your emotional journey through assessments.

---

## 🧠 AI Workflow

1. User submits a message through the React frontend.
2. The request is sent to the FastAPI backend.
3. The backend identifies emotional context from the user's message.
4. The emotional context and recent conversation history are included in the AI prompt.
5. A conversational AI model accessed through Hugging Face Inference Providers generates a supportive response.
6. If the external AI service is unavailable, the backend returns an emotion-aware fallback response.
7. The response and suggested follow-up actions are returned to the frontend.
---

## 🏗️ Architecture

```text
User
   │
   ▼
Next.js / React Frontend
   │
   │ REST API
   ▼
FastAPI Backend
   │
   ├── JWT Authentication
   ├── Emotion Detection
   ├── Conversation Context
   ├── Hugging Face AI Integration
   ├── Fallback Response Handling
   └── SQLAlchemy
            │
            ▼
       SQLite Database
```

---


## 🛠️ Tech Stack

### Frontend
- Next.js
- React.js
- Tailwind CSS

### Backend
- FastAPI
- Python
- SQLAlchemy
- SQLite
- JWT Authentication

### Artificial Intelligence
- Hugging Face Inference Providers
- Conversational AI Model
- Emotion-Aware Prompt Context
- Rule-Based Emotion Detection
- Fallback Response Handling

---

## 📂 Project Structure

```
AI-based-Therapy-App/
│
├── frontend_code/
│   ├── pages/
│   ├── components/
│   ├── styles/
│   └── utils/
│
└── full_api_backend/
    ├── chatbot/
    ├── models/
    ├── routers/
    ├── schemas/
    ├── database.py
    ├── auth.py
    ├── main.py
    └── requirements.txt
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Prabha2005/AI-based-Therapy.git
```

### Backend

```bash
cd full_api_backend

python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

pip install -r requirements.txt

uvicorn main:app --reload
```

Backend runs at:

```
http://127.0.0.1:8000
```

---

### Frontend

```bash
cd frontend_code

npm install

npm run dev
```

Frontend runs at:

```
http://localhost:3000
```

---

## 🔑 Environment Variables

Copy the example environment file and add your own values:

```bash
cp .env.example .env
```

Configure the following variables before running the backend:

- HF_API_TOKEN
- SECRET_KEY
- ALGORITHM
- ACCESS_TOKEN_EXPIRE_MINUTES
- DATABASE_URL

> **Note:** The `.env` file is intentionally excluded from Git for security reasons. Use `.env.example` as a template.

---


## ☁️ Deployment

- Frontend: Vercel
- Backend: Render
- Database: SQLite


---


## ⚠️ Disclaimer

AI Therapy Assistant provides emotional support and self-reflection tools only.

It is **not** intended to diagnose, treat, or replace professional mental health care.

If you are experiencing severe emotional distress or a mental health emergency, please seek assistance from a qualified healthcare professional or your local emergency services.

---

## 🔮 Future Improvements

- 📈 Mood Analytics Dashboard
- 💡 Personalized Recommendations
- 📊 Progress Charts
- 🤖 AI Wellness Summary
- 📅 Daily Mood Tracking
- ☁️ PostgreSQL Database
- 🧠 Transformer-Based Emotion Classification

---

⭐ If you found this project useful, consider giving it a star.