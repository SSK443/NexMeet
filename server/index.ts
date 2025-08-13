import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";
import authRoutes from "./routes/auth";
import roomRoutes from "./routes/room";

dotenv.config();
const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => res.send("NexMeet Backend Running"));
app.use("/api/auth", authRoutes);
app.use("/api/room", roomRoutes);

const server = createServer(app);
const io = new Server(server, { cors: { origin: process.env.FRONTEND_URL } });

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).emit("user-joined", userId);
    socket.emit("room-joined", roomId);
  });

  socket.on("offer", (roomId, offer) => {
    socket.to(roomId).emit("offer", offer);
  });

  socket.on("answer", (roomId, answer) => {
    socket.to(roomId).emit("answer", answer);
  });

  socket.on("ice-candidate", (roomId, candidate) => {
    socket.to(roomId).emit("ice-candidate", candidate);
  });

  socket.on("disconnect", () => console.log("User disconnected:", socket.id));
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server running on port ${port}`));
