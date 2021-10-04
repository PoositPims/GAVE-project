import React, { useEffect, useState } from "react";
import axios from "../../config/axios";
import SellerInfo from "./SellerInfo";
import DeliveryStatus from "./DeliveryStatus";
import SellerProducts from "./SellerProducts";
import SellerRevenue from "./SellerRevenue";


function SellerProContainer() {
  const [salesInfo, setSalesInfo] = useState([]);

const fetchSalesInfo = () =>{
  axios.get("/shops/").then((res) => {
    console.log(res.data.shop)
    const salesInfo = res.data
    setSalesInfo(res.data)
    console.log(setSalesInfo)
  })
}

useEffect(()=>fetchSalesInfo(),[])


  // useEffect(()=>{ 
  //   const fetchSalesInfo = async() => {
  //     try{
  //       const res = await axios.get("/shops/")
  //       setSalesInfo(res.data.shop)
  //     }catch(err){
  //       console.log(err)
  //     }
  //   }
  //   fetchSalesInfo()
  // },[])

  // console.log(salesInfo)

  return (
    // salesInfo.map((salesInfos) => ())
    <div>
      <SellerInfo />
      <SellerRevenue />
      <DeliveryStatus />
      <SellerProducts />
    </div>
  );
}

export default SellerProContainer;
