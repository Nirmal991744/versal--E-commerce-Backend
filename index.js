const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
app.use(cors());
app.use(express.json());

// Connect DB
const connectDB = require("./config/db");
connectDB();

// Routes
const authRoutes = require("./routes/authRoutes.js");
const productRoutes = require("./routes/productRoutes.js");

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// Export instead of listen
module.exports = app;

const { createServer } = require("@vercel/node");

const server = createServer(app);

