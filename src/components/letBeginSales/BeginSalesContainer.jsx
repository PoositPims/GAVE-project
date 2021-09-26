import React from "react";
import BeginSalesButton from "./BeginSalesButton";
import DealInfo from "./DealInfo";
import DeliveringSales from "./DeliveringSales";
import DetailProductSales from "./DetailProductSales";
import GeneralInfo from "./GeneralInfo";
import SalesInfo from "./SalesInfo";
import SpecificInfo from "./SpecificInfo";

function BeginSalesContainer() {
  return (
    <>
      <p className="text-start  fs-5 ms-5">ลงขายสินค้า</p>
      <GeneralInfo />
      <DetailProductSales />
      {/* <SpecificInfo /> */}
      {/* <SalesInfo /> */}
      {/* <DealInfo /> */}
      <DeliveringSales />
      <BeginSalesButton />
    </>
  );
}

export default BeginSalesContainer;
