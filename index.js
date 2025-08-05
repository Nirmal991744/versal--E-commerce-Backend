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

//middleware
app.use(cors());
app.use(express.json());

connectDB();

app.get('/',(req,res)=>{res.send("E-commerce API running...")});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT ,()=>{
   console.log(`Server running on http://localhost:${PORT}`);
})