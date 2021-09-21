import React from "react";
import Footer from "../layout/Footer";
import HeaderSalesRegis from "../layout/HeaderSalesRegis";
import SalesRegisContainer from "./SalesRegisContainer";

function SaleRegister() {
  return (
    <div>
      <HeaderSalesRegis />
      <div className="pb-3 pt-3 bg-grey">
        <SalesRegisContainer />
      </div>
      <Footer />
    </div>
  );
}

export default SaleRegister;
