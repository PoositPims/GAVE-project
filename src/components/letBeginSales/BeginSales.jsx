import React from "react";
import Footer from "../layout/Footer";
import HeaderSales from "../layout/HeaderSales";
import BeginSalesContainer from "./BeginSalesContainer";

// import HeaderSales from "../layout/Headersales";

function beginSales() {
  return (
    <div>
      <HeaderSales />
      <div className="pb-3 pt-3 bg-grey bg-opacity-25 ">
        <BeginSalesContainer />
      </div>
      <Footer />
    </div>
  );
}

export default beginSales;
