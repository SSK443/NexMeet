import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";

dotenv.config();
const app = express();

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Basic API Endpoint
app.get("/", (req, res) => res.send("NexMeet Backend Running"));

// Create HTTP Server
const server = createServer(app);

// Initialize Socket.IO
const io = new Server(server, {
  cors: { origin: process.env.FRONTEND_URL },
});

// Basic Socket.IO Event
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Start Server
const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server running on port ${port}`));
