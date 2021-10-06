import React, { useContext, useEffect, useState } from "react";
import axios from "../../config/axios";
import DeliveryStatusCard from "./DeliveryStatusCard";
import { AuthContext } from "../../contexts/AuthContext";

function DeliveryStatus() {
  const { user } = useContext(AuthContext);
  const [sellerMustdos, setSellerMustdos] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    const fetchSalesMustdo = async () => {
      try {
        const res = await axios.get(`/users/${user.id}`);
        console.log(res.data);
        setSellerMustdos(res.data.user);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSalesMustdo();
  }, []);

  return (
    <div>
      <div className="bg-white container px-0 mt-3">
        <h4 className="fw-bold fs-4 p-3 text-primary">รายการที่ต้องจัดส่ง</h4>
        <DeliveryStatusCard
          deliverStatus="ยังไม่ส่ง"
          // deliveryTo="ปีเตอร์ แอมโบรสฟ"
          deliveryTo={sellerMustdos?.firstName}
          deliveryPlace="14/454 ซ.พาร์คแลนด์ 2 ถ.แมนยู เมืองแมนเชสเตอร์ สหราชอาณาจักร, 10000"
          productPicture="bottle.jpg"
        />
        <DeliveryStatusCard
          deliverStatus="ส่งแล้ว"
          // deliveryTo="ปีเตอร์ แอมโบรสฟ"
          deliveryTo={sellerMustdos?.firstName}
          deliveryPlace="14/454 ซ.พาร์คแลนด์ 2 ถ.แมนยู เมืองแมนเชสเตอร์ สหราชอาณาจักร, 10000"
          productPicture="bottle.jpg"
        />
      </div>
    </div>
  );
}

export default DeliveryStatus;
