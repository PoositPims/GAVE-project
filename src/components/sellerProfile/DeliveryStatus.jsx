import React from "react";
import DeliveryStatusCard from "./DeliveryStatusCard";

function DeliveryStatus() {
  return (
    <div>
      <div className="bg-white container px-0 mt-3">
        <h4 className="fw-bold fs-4 p-3 text-primary">รายการที่ต้องจัดส่ง</h4>
        <DeliveryStatusCard
          deliverStatus="ยังไม่ส่ง"
          deliveryTo="ปีเตอร์ แอมโบรสฟ"
          deliveryPlace="14/454 ซ.พาร์คแลนด์ 2 ถ.แมนยู เมืองแมนเชสเตอร์ สหราชอาณาจักร, 10000"
          productPicture="bottle.jpg"
        />
        <DeliveryStatusCard
          deliverStatus="ส่งแล้ว"
          deliveryTo="ปีเตอร์ แอมโบรสฟ"
          deliveryPlace="14/454 ซ.พาร์คแลนด์ 2 ถ.แมนยู เมืองแมนเชสเตอร์ สหราชอาณาจักร, 10000"
          productPicture="bottle.jpg"
        />
      </div>
    </div>
  );
}

export default DeliveryStatus;
