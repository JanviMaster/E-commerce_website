const ProductCard = ({ product, onClick }) => {
  if (!product) return null;

  return (
    <div
      onClick={() => onClick(product)}
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        width: "220px",
        borderRadius: "8px",
        // boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        cursor: "pointer",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          marginBottom: "10px",
          borderRadius: "4px",
        }}
      />
      <h4>{product.name}</h4>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Rating⭐:</strong> {product.rating}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>
    </div>
  );
};

export default ProductCard;
