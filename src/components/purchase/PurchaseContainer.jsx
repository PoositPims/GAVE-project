import React, { useState, useEffect } from "react";
// import CustomerPurReview from "./ReviewAndAds";
import DetailPur from "./DetailPur";
import MainPurchase from "./MainPurchase";
import axios from "../../config/axios";
import { NavLink, useLocation } from "react-router-dom";
import SpecificPurInfo from "./SpecificPurInfo";

function PurchaseContainer({ onAdd, countCart }) {
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
    // console.log("fetch");
    const fetchSalesProduct = async () => {
      try {
        const res = await axios.get(`/products/${location.state.id}`);
        setSalesProduct(res.data.product);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSalesProduct();
  }, []);

  return (
    <>
      {/* <p className="text-start  fs-6 ms-5">
        <span className="text-primary fw-bold">GAVE</span>
        &gt; อาหารและเครื่องดื่ม &gt; เครื่องดื่ม &gt; น้ำดื่ม
        &gt;น้ำดื่มตราคริสตัล
      </p> */}
      <MainPurchase
        salesProduct={salesProduct}
        onAdd={onAdd}
        countCart={countCart}
      />
      {/* <SpecificPurInfo /> */}
      {/* <DetailPur /> */}
      {/* <CustomerPurReview /> */}
    </>
  );
}

export default PurchaseContainer;
