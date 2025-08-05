const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String,
  category: String,
  brand: String,
  stock: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
