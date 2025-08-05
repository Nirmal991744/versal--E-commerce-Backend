const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("Mongo error:", err));

// Routes
app.get("/api/products", (req, res) => {
  res.json({ message: "Product list would be here." });
});

// ✅ DO NOT CALL app.listen() — Vercel handles it

app.listen(process.env.PORT,()=>{
   console.log('Server Started');
   
})
