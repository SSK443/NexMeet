# NexMeet

A modern video conferencing web app built with the MERN stack, TypeScript, Tailwind CSS, and shadcn/ui. Features include video/audio calls, screen sharing, whiteboard, real-time chat, polls, collaborative notes, video filters, and AI-powered sentiment analysis. Supports up to 50 participants, optimized for performance and security.

## Features
- **Core**: User authentication, room creation/joining, video/audio calls, chat, mic/video controls, link sharing, responsive UI.
- **Unique**: Custom video filters, real-time polling, meeting notes, AI sentiment indicator, screen sharing, whiteboard/darkboard.
- **Tech Stack**: React, Node.js, Express, MongoDB, Socket.IO, WebRTC, Tailwind CSS, shadcn/ui, TypeScript.

## Setup
1. Clone the repo: `git clone <repo-url>`
2. Install frontend dependencies: `cd client && npm install`
3. Install backend dependencies: `cd server && npm install`
4. Configure environment variables (see `.env` files).
5. Run frontend: `cd client && npm run dev`
6. Run backend: `cd server && npm run dev`

## Environment Variables
- **Frontend (`client/.env`)**:

- **Backend (`server/.env`)**:


## Development Progress
- **Day 1**: Initialized project structure with Vite (React + TypeScript) for the frontend and Node.js with TypeScript for the backend. Set up Git with `.gitignore` and initial `README.md`.
- **Day 2**: Installed frontend dependencies (react-router-dom, socket.io-client, simple-peer, zustand, shadcn/ui, Tailwind CSS, etc.) and backend dependencies (express, socket.io, mongoose, jsonwebtoken, bcrypt). Configured Tailwind CSS for responsive, dark-mode UI and shadcn/ui for reusable components.
- **Day 3**: Set up MongoDB Atlas for cloud storage, configured Express.js server with Socket.IO for real-time communication, and tested the backend with a basic API endpoint and Socket.IO connection.

## Repository
[GitHub Repository :NexMeet](<your-repo-url>: [https://github.com/SSK443/NexMeet] https: [https://github.com/SSK443/NexMeet.git])

## License
MIT





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
│   ├── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── .env
├── .gitignore
├── README.md