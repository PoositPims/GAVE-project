import React from "react";
import SellerInfo from "./SellerInfo";
import SellerMustdo from "./SellerMustdo";
import SellerProducts from "./SellerProducts";
import SellerRevenue from "./SellerRevenue";

function SellerProContainer() {
  return (
    <div>
      <SellerInfo />
      <SellerRevenue />
      <SellerMustdo />
      <SellerProducts />
    </div>
  );
}

export default SellerProContainer;
