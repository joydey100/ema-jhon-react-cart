import React from "react";

const Cart = (props) => {
  let total = props.cart.reduce((prev, product) => prev + product.price, 0);
  let shippingPrice = props.cart.reduce(
    (prev, product) => prev + product.shipping,
    0
  );
  let tax = total * 0.1;
  let grandTotal = total + shippingPrice + tax;

  return (
    <div className="cart p-3">
      <h5 className="text-center mb-4"> Order Summary </h5>
      <p className="mb-3"> Items Ordered : {props.cart.length}</p>
      <p className="mb-3"> Price : {total === 0 ? 0 : total.toFixed(2)}</p>
      <p className="mb-3">
        {" "}
        Shipping : {shippingPrice === 0 ? 0 : shippingPrice.toFixed(2)}
      </p>
      <p className="mb-3"> Tax : {tax === 0 ? 0 : tax.toFixed(2)}</p>
      <p className="mb-3">
        {" "}
        Grand Total : {grandTotal === 0 ? 0 : grandTotal.toFixed(2)}
      </p>
      <a href="/buy" className="btn btn-warning d-block">
        Buy Now
      </a>
    </div>
  );
};

export default Cart;
