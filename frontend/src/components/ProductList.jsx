import ProductCard from "./ProductCard";
import './components.css';

const ProductList = ({ products, onProductClick }) => {
  if (!Array.isArray(products)) return null;

  return (
    <>
    <div className="List" style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
      {products.map((product, index) => (
        <ProductCard
          key={`${product._id || product.id}-${index}`}
          product={product}
          onClick={onProductClick}
        />
      ))}
    </div>
    </>
  );
};

export default ProductList;
