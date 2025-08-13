import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  roomId: { type: String, required: true, unique: true },
  password: { type: String }, // Optional
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export const Room = mongoose.model("Room", roomSchema);
