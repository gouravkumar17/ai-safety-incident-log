# 🧠 AI Safety Incident Log

A full-stack web application to log, track, and manage AI safety incidents. Designed to help researchers, developers, and organizations maintain transparency and accountability in AI system behavior.

---

## 🌐 Live Environment

- **Frontend**: http://localhost:8000  
- **Backend API**: http://localhost:3000

---

## 📌 Features

- Log AI safety incidents with structured data
- View historical incident records
- Lightweight frontend served via HTTP server
- Node.js/Express backend connected to SQLite using Sequelize ORM
- Modular codebase with clear separation of concerns

---

## 🛠️ Tech Stack

### Frontend
- HTML, CSS, JavaScript
- Served via: `python -m http.server`

### Backend
- Local server

---

## 📁 Project Structure

spraklehood/
│
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── migrations/
│ ├── models/
│ ├── routes/
│ ├── seeders/
│ ├── database.sqlite
│ └── app.js
│
├── frontend/
│ ├── css/
│ ├── js/
│ ├── app.js
│ └── index.html
│
├── package.json
└── README.md

yaml
Copy
Edit


---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ai-safety-incident-log.git
cd ai-safety-incident-log


cd backend
npm install
node app.js

If you're using Sequelize migrations:
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all


cd frontend
python -m http.server 8000


PORT=3000
DATABASE_URL=sqlite://database.sqlite


