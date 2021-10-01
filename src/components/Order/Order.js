import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import OrderDetails from "../OrderDetails/OrderDetails";

const Order = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemove = (product) => {
    let filterProduct = cart.filter((pd) => pd.key !== product.key);
    setCart(filterProduct);
    removeFromDb(product.key);
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
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Order;
