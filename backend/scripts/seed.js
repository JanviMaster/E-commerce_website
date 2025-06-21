const mongoose = require("mongoose");
const Product = require("../models/Product"); 
require("dotenv").config();

const seedProducts = async () => {
  await Product.deleteMany(); 
  await Product.insertMany([
    { name: "Nike Running Shoes", category: "Shoes", price: 2500 },
    { name: "Adidas Sneakers", category: "Shoes", price: 2800 },
    { name: "Puma Hoodie", category: "Clothing", price: 1500 },
    { name: "Apple Watch", category: "Accessories", price: 22000 },
    { name: "Smartphone Case", category: "Accessories", price: 400 },
  ]);
  console.log("✅ Products seeded!");
  mongoose.disconnect();
};

mongoose.connect(process.env.MONGO_URI).then(seedProducts);
