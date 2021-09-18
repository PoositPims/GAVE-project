import React from "react";
import PaymentMethod from "./PaymentMethod";

function PaymentContainer() {
  return (
    <div>
      <h4 className="text-start fw-bold ms-5">สินค้าทั้งหมด 1 รายการ</h4>
      <PaymentMethod />
    </div>
  );
}

export default PaymentContainer;
