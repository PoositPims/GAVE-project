import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import HeaderFinal from "../layout/HeaderFinal";
import PurchaseContainer from "./PurchaseContainer";

function Purchase() {
  return (
    <div>
      {/* <Header /> */}
      <HeaderFinal/>
      <div className="pb-3 pt-3 bg-grey bg-opacity-25 ">
        <PurchaseContainer />
      </div>
      <Footer />
    </div>
  );
}

export default Purchase;
