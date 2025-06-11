const ProductList = ({ products, onProductClick }) => {
    return (
      <div>
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => onProductClick(product)}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductList;
  