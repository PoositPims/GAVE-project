import React, { useState, useEffect } from "react";
// import CustomerPurReview from "./ReviewAndAds";
// import DetailPur from "./DetailPur";
import MainPurchase from "./MainPurchase";
import axios from "../../config/axios";
import { useLocation } from "react-router-dom";
// import SpecificPurInfo from "./SpecificPurInfo";

function PurchaseContainer({ countCart }) {
  const location = useLocation();
  const [salesProduct, setSalesProduct] = useState({
    productName: "",
    productPicture: "",
    price: "",
    discount: "",
    amount: "",
    productSize: "",
    delivery: "",
    productPicture: "",
  });

  useEffect(() => {
    const fetchSalesProduct = async () => {
      try {
        const res = await axios.get(`/products/${location.state.id}`);
        setSalesProduct(res.data.product);
        // console.log(res.data.product);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSalesProduct();
  }, []);
  // console.log(salesProduct);

  return (
    <>
      {/* <p className="text-start  fs-6 ms-5">
        <span className="text-primary fw-bold">GAVE</span>
        &gt; อาหารและเครื่องดื่ม &gt; เครื่องดื่ม &gt; น้ำดื่ม
        &gt;น้ำดื่มตราคริสตัล
      </p> */}
      <MainPurchase salesProduct={salesProduct} countCart={countCart} />
      {/* <SpecificPurInfo /> */}
      {/* <DetailPur /> */}
      {/* <CustomerPurReview /> */}
    </>
  );
}

export default PurchaseContainer;
