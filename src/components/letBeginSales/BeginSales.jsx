import React from "react";
import Footer from "../layout/Footer";
import HeaderFinal from "../layout/HeaderFinal";
import HeaderSales from "../layout/HeaderSales";
import BeginSalesContainer from "./BeginSalesContainer";

// import HeaderSales from "../layout/Headersales";

function beginSales() {
  return (
    <div>
      {/* <HeaderSales /> */}
      <HeaderFinal headTitle=' ขาย'/>
      <div className="pb-3 pt-3 bg-grey bg-opacity-25 ">
        <BeginSalesContainer />
      </div>
      <Footer />
    </div>
  );
}

export default beginSales;
