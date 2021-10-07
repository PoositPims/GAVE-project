import { createContext, useState, useEffect } from "react";
import axios from "../config/axios";

const SellerProductContext = createContext();

function SellerProductProvider({ children }) {
  const [sellerProduct, setSellerProduct] = useState([]);
  const [sellerProductNotActive, setSellerProductNotActive] = useState([]);

  useEffect(() => {
    const fetchSalesProduct = async () => {
      try {
        const resActive = await axios.get(`/products/sold`);
        const resNotAvtive = await axios.get(
          `/products/notSold/?isActive=false`
        );
        // const resNotAvtive = await axios.get(
        //   `/products/notSold/?isActive=false`
        // );
        // console.log(resNotAvtive.data);
        setSellerProduct(resActive.data.product);
        setSellerProductNotActive(resNotAvtive.data.product);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSalesProduct();
  }, []);

  return (
    <SellerProductContext.Provider
      value={{
        sellerProduct,
        setSellerProduct,
        sellerProductNotActive,
        setSellerProductNotActive,
      }}
    >
      {children}
    </SellerProductContext.Provider>
  );
}

export { SellerProductProvider, SellerProductContext };
