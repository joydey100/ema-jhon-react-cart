import React from "react";

const OrderDetails = (props) => {
  const { img, name, price, quantity, seller } = props.product;
  return (
    <div className="mb-3 p-4 shadow-lg">
      <img
        src={img}
        alt="product"
        style={{ width: "200px", height: "200px" }}
        className="mb-2"
      />
      <h5 className="mb-3"> {name} </h5>
      <p className="mb-3">Price: {price} </p>
      <p className="mb-3 text-secondary">Quantity: {quantity} </p>
      <p className="mb-3 text-secondary"> Seler: {seller} </p>
      <button
        className="btn mb-4 btn-warning"
        onClick={() => props.handleRemove(props.product)}
      >
        Remove Product
      </button>
    </div>
  );
};

export default OrderDetails;
