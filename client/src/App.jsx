import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import AdminReviews from "./pages/AdminReviews";
import AdminLogin from "./pages/AdminLogin";


export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/admin" element={<AdminReviews />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminReviews />} />
      </Routes>
    </div>
  );
}
