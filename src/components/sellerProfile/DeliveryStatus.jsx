import React, { useContext, useEffect, useState } from "react";
import axios from "../../config/axios";
import DeliveryStatusCard from "./DeliveryStatusCard";
import { AuthContext } from "../../contexts/AuthContext";
import { OrderContext } from "../../contexts/OrderContext";

function DeliveryStatus() {
  const { user } = useContext(AuthContext);
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

  // sellerMustdos.Cart.forEach((item) => console.log(item));
  // console.log(sellerMustdos.Cart?.products);
  const show = sellerMustdos;
  console.log(show);
  const showMap = show?.map((item, index) => {
    // console.log(item.Cart.products.map((item2) => item2.productId).length);
    // console.log(item);
    if (item.Cart.products.length === 0) {
      return null;
    } else {
      return (
        <div key={index}>
          <DeliveryStatusCard
            deliveryTo={item.User.firstName}
            deliveryPlace={item.User.address1}
            // productPicture="bottle.jpg"
            products={item.Cart.products}
            date={item.createdAt}
          />
        </div>
      );
    }
  });
  // console.log(show);

  return (
    <div>
      <div className="bg-white container px-0 mt-3">
        <h4 className="fw-bold fs-4 p-3 text-primary">รายการที่ต้องจัดส่ง</h4>
        {showMap}
      </div>
    </div>
  );
}

export default DeliveryStatus;
