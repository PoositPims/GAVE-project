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
    productName:'',
      productPicture:'',
      productSize:'',
      price:'',
      discount:'',
      amount:'',
      delivery:'',
      isActive:'',
  })

  const [error, setError] = useState({
    productName:'',
    productPicture:'',
    productSize:'',
    price:'',
    discount:'',
    amount:'',
    delivery:'',
    isActive:'',
  });

  const handleSubmitForm = async e => {
    e.preventDefault()
    try{
      const res = await axios.post('/products/createProduct',{
    productName: input.productName,
    productPicture: input.productPicture,
    productSize: input.productSize,
    price: input.price,
    discount: input.discount,
    amount: input.amount,
    delivery: input.delivery,
    isActive: input.isActive,
      })
      history.push("/sellerProfile");
    } catch(err){
      if (err.response && err.response.status === 400) {
        setError("Invalid username or password");
      }
    }
  }


  return (
    <>
      <p className="text-start  fs-5 ms-5">ลงขายสินค้า</p>
      <form onSubmit={handleSubmitForm}>
      <GeneralInfo input={input} setInput={setInput} error={error} setError={setError}/>
      <DetailProductSales input={input} setInput={setInput} error={error} setError={setError} />
      <DeliveringSales input={input} setInput={setInput} error={error} setError={setError}/>
      <BeginSalesButton />
      </form>
    </>
  );
}

export default BeginSalesContainer;
