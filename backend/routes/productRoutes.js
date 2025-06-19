const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  searchProducts,
  logProductClick,
} = require("../controllers/productController");

router.get("/products", getAllProducts);
router.get("/products/search", searchProducts);
router.post("/products/click", logProductClick);

module.exports = router;
