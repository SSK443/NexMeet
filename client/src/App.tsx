import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "../src/components/ui/sonner"; // Add this import

export default function App() {
  return (
    <BrowserRouter>
      <Toaster /> {/* Add this to enable sonner toasts */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
