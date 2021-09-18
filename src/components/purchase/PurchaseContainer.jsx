import React from "react";
import CustomerPurReview from "./ReviewAndAds";
import DetailPur from "./DetailPur";
import MainPurchase from "./MainPurchase";
import SpecificPurInfo from "./SpecificPurInfo";

function PurchaseContainer() {
  return (
    <>
      <p className="text-start  fs-6 ms-5">
        <span className="text-primary fw-bold">GAVE</span>
        &gt; อาหารและเครื่องดื่ม &gt; เครื่องดื่ม &gt; น้ำดื่ม
        &gt;น้ำดื่มตราคริสตัล
      </p>
      <MainPurchase />
      <SpecificPurInfo />
      <DetailPur />
      <CustomerPurReview />
    </>
  );
}

export default PurchaseContainer;
