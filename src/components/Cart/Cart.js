import React from "react";

const Cart = (props) => {
  // some essentital property
  let items = 0;
  let itemTotal = 0;
  let itemShipping = 0;

  // looping props.cart items
  for (let product of props.cart) {
    items += product.quantity;
    itemTotal += product.price * product.quantity;
    itemShipping += product.shipping;
  }

  let itemTax = itemTotal * 0.2;
  let itemGrandTotal = itemTotal + itemShipping + itemTax;

  return (
    <div className="cart p-3">
      <h5 className="text-center mb-4"> Order Summary </h5>
      <p className="mb-3"> Items Ordered : {items}</p>
      <p className="mb-3"> Price : {itemTotal && itemTotal.toFixed(2)}</p>
      <p className="mb-3">
        Shipping : {itemShipping && itemShipping.toFixed(2)}
      </p>
      <p className="mb-3"> Tax : {itemTax && itemTax.toFixed(2)}</p>
      <p className="mb-3">
        Grand Total : {itemGrandTotal && itemGrandTotal.toFixed(2)}
      </p>
      {props.children}
    </div>
  );
};

export default Cart;
