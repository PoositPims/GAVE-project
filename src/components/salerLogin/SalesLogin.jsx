import React from "react";
import Footer from "../layout/Footer";
import HeaderSalesLogin from "../layout/HeaderSalesLogin";
import SalesLoginContainer from "./SalesLoginContainer";

function SalesLogin() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <HeaderSalesLogin />
      <div style={{ minHeight: "630px" }}>
        <SalesLoginContainer />
      </div>
      <Footer />
    </div>
  );
}

export default SalesLogin;
