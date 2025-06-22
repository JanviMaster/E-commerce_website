import ProductCard from "./ProductCard";

const ProductList = ({ products, onProductClick }) => {
  if (!Array.isArray(products)) return null;

  return (
    <>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
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
