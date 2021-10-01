import { useState, useEffect } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);

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

  return [cart, setCart];
};

export default useCart;
