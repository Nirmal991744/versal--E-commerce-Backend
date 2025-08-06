const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const dotenv=require('dotenv');
const connectDB=require('./config/db')

const authRoutes = require("./routes/authRoutes.js");
const productRoutes = require("./routes/productRoutes");

dotenv.config();
const app=express();
const PORT=process.env.PORT||5000;

const corsOptions = {
  origin: ["https://versal-e-commerce-mern-project.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
};
app.use(cors(corsOptions));

app.use(express.json());

connectDB();

app.get('/',(req,res)=>{res.send("E-commerce API running...")});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT ,()=>{
   console.log(`Server running on http://localhost:${PORT}`);
})