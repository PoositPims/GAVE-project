import React from "react";
import Footer from "../layout/Footer";
import HeaderFinal from "../layout/HeaderFinal";
import HeaderSalesRegis from "../layout/HeaderSalesRegis";
import SalesRegisContainer from "./SalesRegisContainer";

function SaleRegister() {
  return (
    <div>
      {/* <HeaderSalesRegis /> */}
      <HeaderFinal headTitle=" | ขาย" />
      <div className="pb-3 pt-3 bg-grey" style={{ minHeight: "680px" }}>
        <SalesRegisContainer />
      </div>
      <Footer />
    </div>
  );
}

export default SaleRegister;
