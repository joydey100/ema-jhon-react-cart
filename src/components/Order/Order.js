import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import OrderDetails from "../OrderDetails/OrderDetails";
import { NavLink } from "react-router-dom";

const Order = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemove = (product) => {
    let filterProduct = cart.filter((pd) => pd.key !== product.key);
    setCart(filterProduct);
    removeFromDb(product.key);
  };

  const removeorders = () => {
    setCart([]);
    clearTheCart();
  };

  return (
    <div className="container mt-3">
      <div className="row g-2">
        <div className="col-md-9">
          {cart.map((product) => (
            <OrderDetails
              product={product}
              key={product.key}
              handleRemove={handleRemove}
            />
          ))}
        </div>
        <div className="col-md-3">
          <Cart cart={cart}>
            <NavLink
              to="/success"
              className="btn btn-warning"
              onClick={removeorders}
            >
              Place Order
            </NavLink>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Order;
