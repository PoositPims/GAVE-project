import React from "react";

function DeliveryStatusCard({
  deliverStatus,
  deliveryTo,
  deliveryPlace,
  productPicture,
}) {
  return (
    <>
      <div className="d-flex mt-3 ">
        <div className="col-1 ">
          <h4 className="text-center ">สถานะ</h4>
          <p className="fw-bold fs-4 text-center text-warning">
            {deliverStatus}
          </p>
        </div>

        <div className="d-flex col ms-5 border-start border-3 border-primary">
          <img src={productPicture} alt="" style={{ width: "100px" }} />
          <div>
            <p>
              <span className="text-primary fw-bold">ผู้สั่ง: </span>
              {deliveryTo}
            </p>
            <p>
              <span className="text-primary fw-bold">ที่อยู่: </span>
              {deliveryPlace}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliveryStatusCard;
