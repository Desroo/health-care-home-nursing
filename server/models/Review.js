const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    service: { type: String, required: true, trim: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    message: { type: String, required: true, trim: true },
    approved: { type: Boolean, default: false }, // admin approves
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
