import React, { useState } from "react";
import BeginSalesButton from "./BeginSalesButton";
import axios from "../../config/axios";
import DealInfo from "./DealInfo";
import DeliveringSales from "./DeliveringSales";
import DetailProductSales from "./DetailProductSales";
import GeneralInfo from "./GeneralInfo";
import SalesInfo from "./SalesInfo";
import { useHistory } from "react-router-dom";

function BeginSalesContainer() {
  const history = useHistory();

  const [input, setInput] = useState({
    productName: "",
    // productPicture: "",
    productSize: "",
    price: "",
    discount: "",
    amount: "",
    delivery: "",
    isActive: "",
  });

  const [productPicture, setProductPicture] = useState(null);

  const [error, setError] = useState({
    productName: "",
    productPicture: "",
    productSize: "",
    price: "",
    discount: "",
    amount: "",
    delivery: "",
    isActive: "",
  });

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    // try {
    //   const res = await axios.post("/products/createProduct", {
    //     productName: input.productName,
    //     productPicture: input.productPicture,
    //     productSize: input.productSize,
    //     price: input.price,
    //     discount: input.discount,
    //     amount: input.amount,
    //     delivery: input.delivery,
    //     isActive: true,
    //   });
    //   history.push("/sellerProfile");
    // } catch (err) {
    //   if (err.response && err.response.status === 400) {
    //     setError("Invalid username or password");
    //   }
    // }

    const formData = new FormData();
    formData.append("productName", input.productName);
    // formData.append("productPicture", input.productPicture);
    formData.append("productSize", input.productSize);
    formData.append("price", input.price);
    formData.append("discount", input.discount);
    formData.append("amount", input.amount);
    formData.append("delivery", input.delivery);
    formData.append("isActive", true);
    formData.append("cloudInput", productPicture);

    axios.post("/products/createProduct", formData).then((res) => {
      history.push("/sellerProfile");
    });
  };

  const handleSaveButNotSell = async (e) => {
    e.preventDefault();
    // try {
    //   const res = await axios.post("/products/createProduct", {
    //     productName: input.productName,
    //     productPicture: input.productPicture,
    //     productSize: input.productSize,
    //     price: input.price,
    //     discount: input.discount,
    //     amount: input.amount,
    //     delivery: input.delivery,
    //     isActive: false,
    //   });
    //   history.push("/sellerProfile");
    // } catch (err) {
    //   if (err.response && err.response.status === 400) {
    //     setError("Invalid username or password");
    //   }
    // }

    const formData = new FormData();
    formData.append("productName", input.productName);
    // formData.append("productPicture", input.productPicture);
    formData.append("productSize", input.productSize);
    formData.append("price", input.price);
    formData.append("discount", input.discount);
    formData.append("amount", input.amount);
    formData.append("delivery", input.delivery);
    formData.append("isActive", false);
    formData.append("cloudInput", productPicture);

    axios.post("/products/createProduct", formData).then((res) => {
      history.push("/sellerProfile");
    });
  };

  return (
    <>
      <p className="text-start  fs-5 ms-5">ลงขายสินค้า</p>
      <form
      // onSubmit={handleSubmitForm}
      >
        <GeneralInfo
          input={input}
          setInput={setInput}
          error={error}
          setError={setError}
          productPicture={productPicture}
          setProductPicture={setProductPicture}
        />
        <DetailProductSales
          input={input}
          setInput={setInput}
          error={error}
          setError={setError}
        />
        <DeliveringSales
          input={input}
          setInput={setInput}
          error={error}
          setError={setError}
        />
        <BeginSalesButton
          handleSubmitForm={handleSubmitForm}
          handleSaveButNotSell={handleSaveButNotSell}
        />
      </form>
    </>
  );
}

export default BeginSalesContainer;
