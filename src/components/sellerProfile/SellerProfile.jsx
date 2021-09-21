import React from "react";
import Footer from "../layout/Footer";
import HeaderSalesRegis from "../layout/HeaderSalesRegis";
import SellerProContainer from "./SellerProContainer";

function SellerProfile() {
  return (
    <div>
      <HeaderSalesRegis />
      <div className="pb-3 pt-3 bg-grey">
        <SellerProContainer />
      </div>
      <Footer />
    </div>
  );
}

export default SellerProfile;
