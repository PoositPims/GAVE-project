import React from "react";
import Footer from "../layout/Footer";
import HeaderCart from "../layout/HeaderCart";
import CartContrainer from "./CartContrainer";

function Cart() {
  return (
    <div>
      <HeaderCart />
      <div className="pb-3 pt-3 bg-grey ">
        <CartContrainer />
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
