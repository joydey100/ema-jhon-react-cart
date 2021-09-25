import React, { useState, useEffect } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  // use State
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // load main Data
  useEffect(() => {
    fetch(`./products.JSON`)
      .then((res) => res.json())
      .then((data) => {
        setDisplayProducts(data);
        setProducts(data);
      });
  }, []);

  // load from local Storage and sent to cart
  useEffect(() => {
    //  get Data from ls
    const getData = getStoredCart();

    const mainArr = [];

    if (products.length) {
      // looping data
      for (let data in getData) {
        // Find array elements with  the value
        let findProduct = products.find((product) => product.key === data);

        if (!findProduct.quantity) {
          findProduct.quantity = getData[data];
        }
        mainArr.push(findProduct);
      }
    }

    setCart(mainArr);
  }, [products]);

  // handle Cart function
  const handleCart = (product) => {
    if (!product.quantity) {
      product.quantity = 1;
    } else {
      product.quantity += 1;
    }

    const newCart = [...new Set([...cart, product])];
    setCart(newCart);

    // add to Local Storage
    addToDb(product.key);
  };

  // Function for Searching
  const handleChange = (e) => {
    let searchData = e.target.value;

    if (displayProducts.length) {
      // filter out product
      let filterData = displayProducts.filter((product) =>
        product.name.toLowerCase().includes(searchData.toLowerCase())
      );

      console.log(filterData);

      if (filterData.length === 0 || searchData.length === 0) {
        setDisplayProducts(products);
      } else {
        setDisplayProducts(filterData);
      }
    }
  };

  return (
    <div className="shop-container">
      <div className="search-field bg-secondary py-3">
        <div className="container">
          <input
            type="text"
            className="form-control mx-auto"
            placeholder="Search prouducts"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-9 border-end">
            <h4 className="mt-4"> Products Found: {products.length} </h4>
            <div className="product-container p-3">
              {displayProducts.map((product) => (
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
              <Cart cart={cart} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
