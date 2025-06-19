// controllers/productController.js

const products = require("../data/products");

// ✅ Function 1: Get All
const getAllProducts = (req, res) => {
  res.json(products);
};

// ✅ Function 2: Search Products
const searchProducts = (req, res) => {
  const query = req.query.query?.toLowerCase();
  if (!query) {
    return res.status(400).json({ message: "Query parameter is required" });
  }

  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  res.json(filtered);
};

// ✅ Function 3: Log Clicks
const clickLogs = [];

const logProductClick = (req, res) => {
  const { productId } = req.body;
  if (!productId) {
    return res.status(400).json({ message: "Product ID is required" });
  }

  clickLogs.push({ productId, timestamp: Date.now() });

  console.log("Click logged:", productId);
  res.status(201).json({ message: "Click logged successfully" });
};

// ✅ Export All Functions
module.exports = {
  getAllProducts,
  searchProducts,
  logProductClick,
};
