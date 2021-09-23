import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  // State Calling  for Load Data
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  //   UseEffect for loading Data
  useEffect(() => {
    fetch(`./products.JSON`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // handleCart
  const handleCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container container">
      <div className="row g-4">
        <div className="col-md-9 border-end">
          <h4 className="mt-4"> Products Found: {products.length}</h4>
          <div className="product-container p-3">
            {products.map((product) => (
              <Product
                product={product}
                key={product.key}
                handleCart={handleCart}
              />
            ))}
          </div>
        </div>
        <div className="col-md-3">
          <div className="cart-container">
            <Cart cart={cart}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
