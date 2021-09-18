import React from "react";
import Footer from "../layout/Footer";
import HeaderPayment from "../layout/HeaderPayment";
import PaymentContainer from "./PaymentContainer";

function Payment() {
  return (
    <div>
      <HeaderPayment />
      <div className="pb-3 pt-3 bg-grey bg-opacity-25 ">
        <PaymentContainer />
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
