const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Error fetching products", err });
  }
};

const searchProducts = async (req, res) => {
  const query = req.query.query?.toLowerCase();
  try {
    const products = await Product.find({
      name: { $regex: query, $options: "i" },
    });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Search error", err });
  }
};

const logProductClick = (req, res) => {
  const { productId } = req.body;
  if (!productId) {
    return res.status(400).json({ message: "Product ID is required" });
  }

  console.log("Click logged for product:", productId);
  res.status(201).json({ message: "Click logged" });
};

module.exports = {
  getAllProducts,
  searchProducts,
  logProductClick,
};
