const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
