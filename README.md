# 🧠 AI Therapy Assistant

AI Therapy Assistant is a web-based mental wellness platform that provides users with a safe space to understand their emotions, reflect on their thoughts, and receive AI-assisted emotional support. The application combines mental health assessments, emotion-aware conversations, and personal reflection tools to encourage emotional well-being.

---

## ✨ Features

- 🔐 Secure User Registration & Login (JWT Authentication)
- 🧠 Mental Health Self-Assessment
- 🤖 AI Therapy Chatbot
- 😊 Emotion Detection using Hugging Face Transformers
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
- Hugging Face Transformers
- Emotion Classification Model
- Rule-Based Therapy Response Engine

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

Create a `.env` file inside the backend folder.

```env
HF_API_TOKEN=your_huggingface_api_token
SECRET_KEY=your_secret_key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60
DATABASE_URL=sqlite:///./database.db
```

---

## 📸 Screenshots

You can add screenshots here after deployment.

- Home Page
- Dashboard
- Assessment
- AI Chatbot
- Reflection Journal
- About Page

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
- 🌐 Cloud Deployment

---

⭐ If you found this project useful, consider giving it a star.