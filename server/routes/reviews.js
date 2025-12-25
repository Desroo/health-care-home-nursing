const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

// 🔐 Admin middleware
function adminAuth(req, res, next) {
  const key = req.headers["x-admin-key"];
  if (!key || key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
}

// ✅ Public: get approved reviews only
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find({ approved: true }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 🔐 Admin: get ALL reviews
router.get("/admin/all", adminAuth, async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Submit review
router.post("/", async (req, res) => {
  try {
    const { name, service, rating, message } = req.body;

    if (!name || !service || rating === undefined || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await Review.create({
      name,
      service,
      rating: Number(rating),
      message,
      approved: false,
    });

    res.status(201).json({ message: "Review submitted for approval" });
  } catch (err) {
    console.error("POST /api/reviews error:", err);
    res.status(500).json({ message: err.message });
  }
});

// 🔐 Admin: approve review
router.patch("/:id/approve", adminAuth, async (req, res) => {
  try {
    await Review.findByIdAndUpdate(req.params.id, { approved: true });
    res.json({ message: "Review approved" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
