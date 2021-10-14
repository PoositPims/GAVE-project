import React from "react";
import DeliveryStatusCardEach from "./DeliveryStatusCardEach";

function DeliveryStatusCard({
  deliverStatus,
  deliveryTo,
  deliveryPlace,
  productPicture,
  products,
  date,
}) {
  // console.log(date);
  return (
    <>
      <div className="mt-3 ">
        <div>
          <p>
            <span className="text-primary fw-bold">ผู้สั่ง: </span>
            {deliveryTo}
          </p>
          <p>
            <span className="text-primary fw-bold">ที่อยู่: </span>
            {deliveryPlace}
          </p>
          <p className="d-flex">
            <span className="text-primary fw-bold">วันที่สั่ง: </span>
            <div className="d-flex">
              <p>{new Date(date).getDate()}/</p>
              <p>{new Date(date).getMonth()}/</p>
              <p>{new Date(date).getFullYear()}</p>
            </div>
          </p>
        </div>

        {products.map((item, index) => (
          <DeliveryStatusCardEach
            key={index}
            productId={item.productId}
            quantity={item.quantity}
          />
        ))}
      </div>
    </>
  );
}

export default DeliveryStatusCard;
