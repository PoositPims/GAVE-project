import React from "react";
import CartPayment from "./CartPayment";
import DeliverPlace from "./DeliverPlace";
import RecomMoreCart from "./RecomMoreCart";
import YourCart from "./YourCart";

function CartContrainer() {
  return (
    <div>
      <DeliverPlace />
      <h4 className="text-start fw-bold ms-5 fs-5 mt-3">
        คุณมีสินค้าอยู่ในรถเข็น 1 รายการ
      </h4>
      <div className="d-flex">
        <YourCart />
        <CartPayment />
      </div>
      {/* <RecomMoreCart /> */}
    </div>
  );
}

export default CartContrainer;
