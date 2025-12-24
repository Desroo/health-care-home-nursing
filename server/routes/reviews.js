const express = require("express");
const Review = require("../models/Review");

const router = express.Router();

// Public: get only approved reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find({ approved: true }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch reviews" });
  }
});

// Public: submit review (not approved initially)
router.post("/", async (req, res) => {
  try {
    const { name, service, rating, message } = req.body;

    if (!name || !service || !rating || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const review = await Review.create({
      name,
      service,
      rating: Number(rating),
      message,
    });

    res.status(201).json({
      message: "Review submitted for approval",
      review,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to submit review" });
  }
});

module.exports = router;
