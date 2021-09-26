import React from "react";
import SellerInfo from "./SellerInfo";
import DeliveryStatus from "./DeliveryStatus";
import SellerProducts from "./SellerProducts";
import SellerRevenue from "./SellerRevenue";

function SellerProContainer() {
  return (
    <div>
      <SellerInfo />
      <SellerRevenue />
      <DeliveryStatus />
      <SellerProducts />
    </div>
  );
}

export default SellerProContainer;
