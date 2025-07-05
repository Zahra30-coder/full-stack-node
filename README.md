# 🎬 Full Stack Movie CRUD App

A lightweight full-stack app using **React + Express** to manage movies.

---

## 🧱 Tech Stack

| Frontend        | Backend          |
|----------------|------------------|
| React + Vite   | Node.js + Express |
| Axios          | CORS             |
| React Router   | Nodemon (dev)    |

---

## 🚀 Quick Start

### 🔹 1. Clone the Repository

bash
git clone https://github.com/Zahra30-coder/full-stack-node.git
cd full-stack-node

2. Install Dependencies
Option A: Use setup script (for Git Bash / Linux / macOS)
bash
 
./setup.sh
Option B: Manual install (for Windows PowerShell)
bash
 
cd backend && npm install
cd ../frontend && npm install
cd ..
🔹 3. Run App (both servers)
bash
 
npm run dev
Frontend: http://localhost:5173

Backend: http://localhost:3000


## 📁 Folder Structure
pgsql
 
full-stack-node/
├── backend/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── App.jsx
│   └── package.json
├── setup.sh         # Setup script
├── package.json     # Root with 'concurrently'
└── README.md

## 🧩 API Endpoints
Method	Route	Description
GET	/api/movies	Fetch all movies
POST	/api/movies	Add new movie
DELETE	/api/movies/:id	Delete a movie


### 🌍 Deployment
✅ Backend (Render)
Root Directory: backend/

Build Command: npm install

Start Command: node server.js

Port: 3000

Optional .env:

ini
 
PORT=3000


## ✅ Frontend (Vercel)
Root Directory: frontend/

Framework: Vite

Output Dir: dist

Add env variable:

ini
 
VITE_API_BASE=https://your-backend.onrender.com
Update config.js:

js
const API_BASE = import.meta.env.VITE_API_BASE;
export default API_BASE;

## 📦 Production Tips
Task	Command
Clean install	npm ci
Prod install only	npm ci --only=production
Vercel build	Uses NODE_ENV=production
Render	Dev deps skipped by default

