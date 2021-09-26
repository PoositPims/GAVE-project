import React from "react";
import DeliveryStatusCard from "./DeliveryStatusCard";

function DeliveryStatus() {
  return (
    <div>
      <div className="bg-white container px-0 mt-3">
        <h4 className="fw-bold fs-4 p-3 text-primary">รายการที่ต้องจัดส่ง</h4>
        {/* <div className="d-flex ">
          <div className="col-1 ">
            <h4 className="text-center ">สถานะ</h4>
            <p className="fw-bold fs-4 text-center text-warning">ยังไม่ส่ง</p>
          </div>

          <div className="d-flex col ms-5 border-start border-3 border-primary">
            <img src="bottle.jpg" alt="" style={{ width: "100px" }} />
            <div>
              <p>
                <span className="text-primary fw-bold">ผู้สั่ง: </span>
                คุณปีเตอร์
              </p>
              <p>
                <span className="text-primary fw-bold">ที่อยู่: </span>
                14/454 ซ.พาร์คแลนด์ 2 ถ.แมนยู เมืองแมนเชสเตอร์ สหราชอาณาจักร,
                10000
              </p>
            </div>
          </div>
        </div> */}
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
