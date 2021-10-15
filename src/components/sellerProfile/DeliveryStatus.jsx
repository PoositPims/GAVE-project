import React, { useContext, useEffect, useState } from "react";
import axios from "../../config/axios";
import DeliveryStatusCard from "./DeliveryStatusCard";
import { AuthContext } from "../../contexts/AuthContext";
import { OrderContext } from "../../contexts/OrderContext";

function DeliveryStatus({ salesInfos }) {
  const { user } = useContext(AuthContext);
  const { sellerMustdos, setSellerMustdos } = useContext(OrderContext);
  // console.log("salesInfos........................", salesInfos.id);
  // console.log("user....................", user);

  useEffect(() => {
    const fetchSalesMustdo = async () => {
      try {
        // const res = await axios.get(`/orders/${user.id}`);
        const res = await axios.get(`/orders`);
        // console.log(res.data.order);
        setSellerMustdos(res.data.order);
        // console.log(res.data.order.Cart.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSalesMustdo();
  }, []);
  // console.log(sellerMustdos);
  // console.log(sellerMustdos.filter((item) => item.Cart));

  const tryFilter = sellerMustdos.filter((item) => {
    let isHave = false;
    item.Cart.products.forEach((item) => {
      if (item.shopId === salesInfos.id) {
        isHave = true;
      }
    });
    return isHave;
  });
  console.log(tryFilter);

  // console.log(salesInfos.id);
  // sellerMustdos.Cart.forEach((item) => console.log(item));
  // console.log(sellerMustdos.Cart?.products);
  const show = tryFilter;
  // console.log(show);
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
            products={item.Cart.products}
            date={item.createdAt}
            salesInfos={salesInfos}
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
