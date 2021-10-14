import React, { useEffect, useState, useContext } from "react";
import axios from "../../config/axios";
import SellerInfo from "./SellerInfo";
import DeliveryStatus from "./DeliveryStatus";
import SellerProducts from "./SellerProducts";
import SellerRevenue from "./SellerRevenue";
import { AuthContext } from "../../contexts/AuthContext";
import { OrderContext } from "../../contexts/OrderContext";

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

  useEffect(() => {
    const fetchSalesInfo = async () => {
      try {
        const res = await axios.get(`/shops/${user.id}`);
        // console.log(res.data)
        setSalesInfos(res.data.shop);
        // console.log(res)
      } catch (err) {
        console.log(err);
      }
    };
    fetchSalesInfo();
  }, []);

  // ...........................................................................

  const { sellerMustdos, setSellerMustdos } = useContext(OrderContext);
  // console.log(sellerMustdos);

  useEffect(() => {
    const fetchSalesMustdo = async () => {
      try {
        // const res = await axios.get(`/orders/${user.id}`);
        const res = await axios.get(`/orders/${user.id}`);
        console.log(res.data.order);
        setSellerMustdos(res.data.order);
        // console.log(res.data.order.Cart.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSalesMustdo();
  }, []);
  // ...........................................................................

  // console.log(salesInfos)

  return (
    <div>
      <SellerInfo salesInfo={salesInfos} />
      <SellerRevenue salesInfo={salesInfos} sellerMustdos={sellerMustdos} />
      <DeliveryStatus />
      <SellerProducts />
    </div>
  );
}

export default SellerProContainer;
