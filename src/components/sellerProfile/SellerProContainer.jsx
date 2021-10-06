import React, { useEffect, useState,useContext } from "react";
import axios from "../../config/axios";
import SellerInfo from "./SellerInfo";
import DeliveryStatus from "./DeliveryStatus";
import SellerProducts from "./SellerProducts";
import SellerRevenue from "./SellerRevenue";
import { AuthContext } from "../../contexts/AuthContext";


function SellerProContainer() {
  const { user } = useContext(AuthContext);
  const [salesInfos, setSalesInfos] = useState({});

// const fetchSalesInfo = () =>{
//   axios.get("/shops/").then((res) => {
//     console.log(res.data.shop)
//     const salesInfo = res.data
//     setSalesInfo(res.data)
//     console.log(setSalesInfo)
//   })
// }

// useEffect(()=>fetchSalesInfo(),[])


  useEffect(()=>{ 
    const fetchSalesInfo = async() => {
      try{
        const res = await axios.get(`/shops/${user.id}`)
        // console.log(res.data)
        setSalesInfos(res.data.shop)
        // console.log(res)
      }catch(err){
        console.log(err)
      }
    }
    fetchSalesInfo()
  },[])

  // console.log(salesInfos)

  return (
    <div>
      
      <SellerInfo  salesInfo={salesInfos} />
      {/* <SellerInfo /> */}
      <SellerRevenue salesInfo={salesInfos} />
      <DeliveryStatus />
      <SellerProducts />
    </div>
  );
}

export default SellerProContainer;
