# NexMeet

A modern video conferencing web app built with the MERN stack, TypeScript, Tailwind CSS, and shadcn/ui. Features include video/audio calls, screen sharing, whiteboard, real-time chat, polls, collaborative notes, video filters, and AI-powered sentiment analysis. Supports up to 50 participants, optimized for performance and security.

## Features
- **Core**: 
  - User authentication (register/login with email, password, name).
  - Room creation/joining, video/audio calls, real-time chat, mic/video controls, link sharing, responsive UI.
- **Unique**: Custom video filters, real-time polling, meeting notes, AI sentiment indicator, screen sharing, whiteboard/darkboard.
- **Tech Stack**: React, Node.js, Express, MongoDB, Socket.IO, WebRTC, Tailwind CSS, shadcn/ui, TypeScript.

## Progress (Day 4)
- **Day 1**: Initialized project with Vite (React + TypeScript) for frontend and Node.js + TypeScript for backend. Set up Git and basic `README.md`.
- **Day 2**: Installed frontend dependencies (`react-router-dom`, `socket.io-client`, `simple-peer`, `zustand`, shadcn/ui, etc.) and backend dependencies (`express`, `socket.io`, `mongoose`, etc.). Configured Tailwind CSS and shadcn/ui for responsive UI.
- **Day 3**: Set up MongoDB Atlas for cloud storage, created an Express server with Socket.IO, and tested a basic API endpoint.
- **Day 4**: Implemented authentication backend with MongoDB user model (`email`, `password`, `name`) and APIs (`/api/auth/register`, `/api/auth/login`) using JWT and bcrypt. Tested with Postman.

## Setup
1. Clone the repo: `git clone <repo-url>`
2. Install frontend dependencies: `cd client && npm install`
3. Install backend dependencies: `cd server && npm install`
4. Configure environment variables:
   - `client/.env`: Set `VITE_BACKEND_URL=http://localhost:5000`
   - `server/.env`: Set `MONGODB_URI`, `JWT_SECRET`, `PORT=5000`, `FRONTEND_URL=http://localhost:5173`
5. Run frontend: `cd client && npm run dev`
6. Run backend: `cd server && npm run dev`
7. Test APIs with Postman:
   - POST `http://localhost:5000/api/auth/register`: `{ "email": "test@example.com", "password": "123456", "name": "Test User" }`
   - POST `http://localhost:5000/api/auth/login`: `{ "email": "test@example.com", "password": "123456" }`

## License
MIT

## Repository
[GitHub Repository :NexMeet](<your-repo-url>: [https://github.com/SSK443/NexMeet] https: [https://github.com/SSK443/NexMeet.git])






# mongodb 
mongodb
password- hgdyzhNwU1UpFGo8;
username- surajskumar443;
nameofcluster -NexMeetCluster;
connectionstring- mongodb+srv://surajskumar443:hgdyzhNwU1UpFGo8@nexmeetcluster.bo9nfhy.mongodb.net/?retryWrites=true&w=majority&appName=NexMeetCluster;




NexMeet/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   └── button.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── index.css
│   │   ├── assets/
│   │   └── vite-env.d.ts
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   ├── postcss.config.js
│   └── .env
├── server/
│   ├── models/
│   │   └── User.ts
│   ├── routes/
│   │   └── auth.ts
│   ├── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── .env
├── .gitignore
├── README.md