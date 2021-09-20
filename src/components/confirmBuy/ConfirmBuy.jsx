import React from "react";
import Footer from "../layout/Footer";
import HeaderConfirm from "../layout/HeaderConfirm";
import ConfirmContainer from "./ConfirmContainer";

function ConfirmBuy() {
  return (
    <div>
      <HeaderConfirm />
      <div className="pb-3 pt-3 bg-grey ">
        <ConfirmContainer />
      </div>
      <Footer />
    </div>
  );
}

export default ConfirmBuy;
