const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const reviewRoutes = require("./routes/reviews");

const app = express();

// ✅ CORS (dev + production)
const allowedOrigins = [
  "http://localhost:5173",
  "https://health-care-home-nursing.vercel.app",
  process.env.CLIENT_URL,
].filter(Boolean);

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like Postman) and allow known origins
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("CORS blocked: " + origin), false);
    },
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Handle preflight requests explicitly
app.options("*", cors());

app.use(express.json());

// ✅ Health check
app.get("/", (req, res) => {
  res.send("Health Care Home Nursing API is running");
});

app.get("/health", (req, res) => {
  res.json({ ok: true, service: "server", time: new Date().toISOString() });
});

// ✅ API Routes
app.use("/api/reviews", reviewRoutes);

// ✅ Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
