# 📝 MERN Notes App — Frontend (React)

This is the **frontend client** of the MERN Notes App — a secure notes application built using **React**, connected to a **Node.js backend** and **MongoDB** database.
It provides user authentication and full CRUD operations for notes.

---

## 🚀 Live Demo

Frontend: `https://mern-notes-frontend-dls0.onrender.com`
Backend API: `https://mern-notes-backend-r442.onrender.com`

> Works together with deployed backend.
> Login / signup → then create, update & delete notes securely.

---

## ✨ Features

- User Signup & Login
- JWT token stored in localStorage
- Protected notes access after login
- Create / Edit / Delete notes
- Auto-refresh notes after every action

---

## 🛠 Tech Stack

- React.js
- Axios
- React Hooks
- REST API
- JWT Auth (backend)

---

## 📁 Directory Structure

```
src/
 ├── components/
 │   ├── Login.js
 │   ├── Signup.js
 │   ├── NoteForm.js
 │   └── NoteItem.js
 ├── api.js
 └── App.js
```

## Create .env file

```
REACT_APP_API_URL=https://mern-notes-backend-r442.onrender.com
```

## 📦 Installation & Setup

### 1️⃣ Clone and open

```bash
git clone https://github.com/vishalkumar321/MERN-NOTES-FRONTEND.git
cd MERN-NOTES-FRONTEND
npm install
```
