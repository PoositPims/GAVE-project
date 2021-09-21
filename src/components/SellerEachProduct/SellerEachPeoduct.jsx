import React from "react";
import Footer from "../layout/Footer";
import HeaderSalesRegis from "../layout/HeaderSalesRegis";
import SellerEachProContainer from "./SellerEachProContainer";

function SellerEachPeoduct() {
  return (
    <div>
      <HeaderSalesRegis />
      <div className="pb-3 pt-3 bg-grey">
        <SellerEachProContainer />
      </div>
      <Footer />
    </div>
  );
}

export default SellerEachPeoduct;
