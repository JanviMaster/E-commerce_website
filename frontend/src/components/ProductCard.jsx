// src/components/ProductCard.jsx
const ProductCard = ({ product, onClick }) => {
    return (
      <div
        className="card"
        onClick={() => onClick(product.id)}
        style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem" }}
      >
        <h3>{product.name}</h3>
        <p>Category: {product.category}</p>
        <p>Price: ₹{product.price}</p>
      </div>
    );
  };
  
  export default ProductCard;
  