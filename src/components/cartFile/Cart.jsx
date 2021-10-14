import React from "react";
import Footer from "../layout/Footer";
import HeaderCart from "../layout/HeaderCart";
import HeaderFinal from "../layout/HeaderFinal";
import CartContrainer from "./CartContrainer";

function Cart() {
  return (
    <div>
      {/* <HeaderCart /> */}
      <HeaderFinal headTitle=" | รถเข็น" />
      <div className="pb-3 pt-3 bg-grey " style={{ height: 656 }}>
        <CartContrainer />
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
