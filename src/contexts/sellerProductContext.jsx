import { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "../config/axios";
const SellerProductContext = createContext();

function SellerProductProvider({ children }) {
  // const location = useLocation();
  const [sellerProduct, setSellerProduct] = useState([]);
  const [sellerProductNotActive, setSellerProductNotActive] = useState([]);
  // console.log(sellerProduct);

  // // ..................................................................
  // const location = useLocation();
  // const [salesProduct, setSalesProduct] = useState({
  //   productName: "",
  //   productPicture: "",
  //   price: "",
  //   discount: "",
  //   amount: "",
  //   productSize: "",
  //   delivery: "",
  //   productPicture: "",
  // });

  // useEffect(() => {
  //   const fetchSalesProduct = async () => {
  //     try {
  //       // const res = await axios.get(`/products/${location.state.id}`);
  //       const res = await axios.get(`/products/${user.id}`);
  //       setSalesProduct(res.data.product);
  //       // console.log(res.data.product);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchSalesProduct();
  // }, []);
  // console.log(salesProduct);

  // // ..................................................................

  useEffect(() => {
    const fetchSalesProduct = async () => {
      try {
        const resActive = await axios.get(`/products/sold`);
        const resNotAvtive = await axios.get(
          `/products/notSold/?isActive=false
          `
        );
        // console.log(resActive);
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

  // console.log(product);
  // const onAdd = (id) => {
  //   const idx = sellerProduct.findIndex((item) => item.id === id);
  //   // console.log("idx............", idx);
  //   const newCart = [...sellerProduct];
  //   if (idx > -1) {
  //     newCart[idx] = { ...newCart[idx], qty: newCart[idx].qty + 1 };
  //   } else {
  //     newCart.push({ qty: 1 });
  //   }
  //   setSellerProduct(newCart);
  // };

  const onAdd = (id) => {
    const idx = sellerProduct.findIndex((item) => item.id === id);
    const newCart = [...sellerProduct];
    if (idx > -1) {
      newCart[idx] = { ...newCart[idx], qty: newCart[idx].qty + 1 };
    } else {
      newCart.push({ qty: 1 });
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
