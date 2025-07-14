import React from 'react';

const ProductCard = ({ product, onClick }) => {
  if (!product) return null;

  return (
    <>
    <div className='product-card'
      onClick={() => onClick(product)}
      // style={{
      //   border: "1px solid #ccc",
      //   margin:"10px",
      //   padding: "10px",
      //   width: "250px",
      //   borderRadius: "8px",
      //   cursor: "pointer",
      // }}
    >
      {/* <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          marginBottom: "10px",
          borderRadius: "4px",
        }}
      /> */}
      <h4 className='product-name'>{product.name}</h4>
      <div className='product-brand'><strong className='product-brand'> Brand: </strong> {product.brand}</div>
      <p className='product-category'><strong className='product-category'>Category:</strong> {product.category}</p>
      <p className='product-rating'><strong className='product-rating'>⭐Rating:</strong> {product.rating}</p>
      <p className='product-price'><strong className='product-price'>Price:</strong> ₹{product.price}</p>
    </div>
    </>
  );
};

export default ProductCard;
