import express from "express";
import jwt from "jsonwebtoken";
import { Room } from "../models/Room";

const router = express.Router();

router.post("/check", async (req, res) => {
  const { roomId, password } = req.body;
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };
    const room = await Room.findOne({ roomId });
    if (!room) return res.status(404).json({ error: "Room not found" });
    if (room.password && room.password !== password) {
      return res.status(403).json({ error: "Incorrect password" });
    }
    res.json({ message: "Room validated", roomId: room.roomId });
  } catch (error) {
    res.status(500).json({ error: "Server error during room check" });
  }
});

export default router;
