import { createContext, useState, useEffect } from "react";
import axios from "../config/axios";

const SellerProductContext = createContext();

function SellerProductProvider({ children }) {
  const [sellerProduct, setSellerProduct] = useState([]);
  const [sellerProductNotActive, setSellerProductNotActive] = useState([]);
  console.log(sellerProduct);

  useEffect(() => {
    const fetchSalesProduct = async () => {
      try {
        const resActive = await axios.get(`/products/sold`);
        const resNotAvtive = await axios.get(
          `/products/notSold/?isActive=false
          `
        );
        // const resNotAvtive = await axios.get(
        //   `/products/notSold/?isActive=false`
        // );
        // console.log(resActive.data);
        setSellerProduct(resActive.data.product);
        setSellerProductNotActive(resNotAvtive.data.product);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSalesProduct();
  }, []);

  const onAdd = (product) => {
    const idx = sellerProduct.findIndex((item) => item.id === product.id);
    const newCart = [...sellerProduct];
    if (idx > -1) {
      newCart[idx] = { ...newCart[idx], qty: newCart[idx].qty + 1 };
    } else {
      newCart.push({ ...product, qty: 1 });
    }
    setSellerProduct(newCart);
  };

  return (
    <SellerProductContext.Provider
      value={{
        sellerProduct,
        setSellerProduct,
        sellerProductNotActive,
        setSellerProductNotActive,
        onAdd,
      }}
    >
      {children}
    </SellerProductContext.Provider>
  );
}

export { SellerProductProvider, SellerProductContext };
