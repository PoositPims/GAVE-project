import React from "react";
import Footer from "../layout/Footer";
import HeaderFinal from "../layout/HeaderFinal";
import HeaderPayment from "../layout/HeaderPayment";
import PaymentContainer from "./PaymentContainer";

function Payment() {
  return (
    <div>
      {/* <HeaderPayment /> */}
      <HeaderFinal headTitle=' ชำระเงิน'/>
      <div className="pb-3 pt-3 bg-grey bg-opacity-25 ">
        <PaymentContainer />
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
