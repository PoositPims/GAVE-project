import React, { useContext, useState } from "react";
import { SellerProductContext } from "../../contexts/sellerProductContext";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import HeaderFinal from "../layout/HeaderFinal";
import PurchaseContainer from "./PurchaseContainer";

function Purchase() {
  // const [cartItems, setCartItems] = useState([]);
  const { sellerProduct, onAdd, setSellerProduct } =
    useContext(SellerProductContext);

  // const onAdd = (product) => {
  //   const idx = sellerProduct.findIndex((item) => item.id === product.id);
  //   const newCart = [...sellerProduct];
  //   if (idx > -1) {
  //     newCart[idx] = { ...newCart[idx], qty: newCart[idx].qty + 1 };
  //   } else {
  //     newCart.push({ ...product, qty: 1 });
  //   }
  //   setSellerProduct(newCart);
  // };

  return (
    <div>
      {/* <Header /> */}
      <HeaderFinal countCart={sellerProduct.length} />
      <div className="pb-3 pt-3 bg-grey bg-opacity-25 ">
        <PurchaseContainer onAdd={onAdd} countCart={sellerProduct.length} />
      </div>
      <Footer />
    </div>
  );
}

export default Purchase;
