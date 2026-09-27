# ICSI 418Y – Programming Assignment 2: Full-Stack Login and Signup

A full-stack web application with a React frontend, an Express/Node.js backend, and MongoDB storage.

## Project Structure

```
icsi418y-pa2/
├── client/                 # React frontend (Vite)
│   └── src/
│       ├── components/
│       │   ├── Login.jsx
│       │   └── Signup.jsx
│       ├── App.jsx
│       └── main.jsx
│
└── server/                 # Express backend
    ├── server.js
    └── .env                # MongoDB connection string (NOT committed)
```

## Setup

1. **Create the environment file**

   Inside `server/`, create a file named `.env` (use `.env.example` as a template):

   ```
   MONGO_URI=your_mongodb_connection_string
   ```

2. **Install dependencies**

   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

## Run

Two terminals are required.

**Terminal 1 – Backend (port 9000):**

```bash
cd server
node server.js
```

You should see `Connected to MongoDB` and `Server running on port 9000`.

**Terminal 2 – Frontend (port 5173):**

```bash
cd client
npm run dev
```

Open http://localhost:5173 in your browser.

## API

| Method | Endpoint  | Body                                        | Responses                                      |
|--------|-----------|---------------------------------------------|------------------------------------------------|
| POST   | `/signup` | `{ f_name, l_name, username, password }`    | 201 created · 400 missing fields · 409 duplicate username · 500 server error |
| POST   | `/login`  | `{ username, password }`                    | 200 success · 400 missing fields · 401 unknown username / wrong password · 500 server error |

User documents are stored in the `users` collection of the `pa2` database:

```json
{ "_id": "...", "f_name": "...", "l_name": "...", "username": "...", "password": "..." }
```

`username` has a unique index in MongoDB.
