import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStore } from "../store";
import { Toaster } from "../components/ui/sonner";
import io from "socket.io-client"; // Import Socket.IO client

export default function Room() {
  const { roomId } = useParams<{ roomId: string }>();
  const navigate = useNavigate();
  const { setStream, stream, name, setRoomId } = useStore();
  const userVideoRef = useRef<HTMLVideoElement>(null);
  const socketRef = useRef<any>(null); // Type as 'any' for now; refine later

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || !roomId) {
      Toaster({
        title: "Error",
        description: "Invalid room access",
        variant: "destructive",
      });
      navigate("/join");
      return;
    }

    // Initialize Socket.IO client
    const socket = io("http://localhost:5000", {
      extraHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("Connected to Socket.IO server:", socket.id);
      socket.emit("join-room", roomId, name); // Send roomId and userId (name)
    });

    socket.on("room-joined", (joinedRoomId) => {
      console.log("Joined room:", joinedRoomId);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from Socket.IO server");
    });

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        if (userVideoRef.current) userVideoRef.current.srcObject = stream;
      })
      .catch((err) => {
        Toaster({
          title: "Error",
          description: "Failed to access camera/microphone",
          variant: "destructive",
        });
      });

    return () => {
      if (socketRef.current) socketRef.current.disconnect();
      if (stream) stream.getTracks().forEach((track) => track.stop());
    };
  }, [roomId, navigate, setStream, name]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="bg-white dark:bg-gray-800 rounded shadow-md p-6 w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-4">Room: {roomId}</h1>
        <p>Welcome, {name}!</p>
        <div className="mt-4 flex flex-col items-center">
          <video
            ref={userVideoRef}
            autoPlay
            playsInline
            className="w-64 h-48 bg-black rounded"
          />
          <button
            onClick={() => navigate("/join")}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Leave Room
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
