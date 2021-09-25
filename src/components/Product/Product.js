import React from "react";
import Rating from "react-rating";

const Product = (props) => {
  const { img, name, seller, price, stock, star } = props.product;
  return (
    <div className="product d-flex align-items-center border-bottom p-4">
      <div className="product-image">
        <img src={img} alt="product-img" />
      </div>
      <div className="product-info ms-4">
        <h5 className="mb-3"> {name}</h5>
        <p className="mb-3 text-secondary"> By: {seller}</p>
        <h4 className="mb-3">${price}</h4>
        <p className="text-secondary mb-3"> Only - {stock} Left in Stock</p>
        <p>
          <Rating
            emptySymbol="far fa-star text-warning"
            fullSymbol="fas fa-star text-warning"
            initialRating={star}
            readonly
          />
        </p>
        <button
          type="button"
          className="btn btn-dark"
          onClick={() => props.handleCart(props.product)}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Product;
