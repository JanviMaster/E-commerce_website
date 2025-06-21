const ProductCard = ({ product, onClick }) => {
    return (
      <div
        className="card"
        onClick={() => onClick(product.id)}
        style={{ border: "1px solid #ccc", padding: "20px", margin: "25px" }}
      >
        <h3>{product.name}</h3>
        <p>Category: {product.category}</p>
        <p>Price: ₹{product.price}</p>
      </div>
    );
  };
  
  export default ProductCard;
  
  