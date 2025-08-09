import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useStore } from "../store";
import { v4 as uuidv4 } from "uuid";
import { Toaster } from "../components/ui/sonner"; // Import the custom Toaster

export default function Join() {
  const [roomId, setRoomId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { name, setRoomId: setStoreRoomId } = useStore();
  const toast = Toaster; // Use the Toaster component directly for now (no useToast hook)

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast({
        title: "Error",
        description: "Please log in first",
        variant: "destructive",
      });
      navigate("/login");
    }
  }, [navigate, toast]);

  const handleCreateRoom = () => {
    if (!name) {
      toast({
        title: "Error",
        description: "Please set a name after logging in",
        variant: "destructive",
      });
      return;
    }
    const newRoomId = uuidv4();
    setStoreRoomId(newRoomId);
    navigate(`/room/${newRoomId}`);
  };

  const handleJoinRoom = async () => {
    if (!roomId) {
      toast({
        title: "Error",
        description: "Please enter a room ID",
        variant: "destructive",
      });
      return;
    }
    const token = localStorage.getItem("token");
    if (!token) {
      toast({
        title: "Error",
        description: "Please log in first",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }
    try {
      const res = await fetch(`http://localhost:5000/api/room/check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ roomId, password }),
      });
      if (res.ok) {
        setStoreRoomId(roomId);
        navigate(`/room/${roomId}`);
      } else {
        const data = await res.json();
        toast({
          title: "Error",
          description: data.error || "Invalid room or password",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to join room",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="p-6 bg-white dark:bg-gray-800 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Join a Room</h1>
        <Input
          type="text"
          placeholder="Enter Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          className="mb-4"
        />
        <Input
          type="password"
          placeholder="Password (optional)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4"
        />
        <Button onClick={handleCreateRoom} className="w-full mb-2">
          Create Room
        </Button>
        <Button onClick={handleJoinRoom} className="w-full" disabled={!roomId}>
          Join Room
        </Button>
      </div>
      <Toaster /> {/* Add the Toaster component to render toasts */}
    </div>
  );
}
