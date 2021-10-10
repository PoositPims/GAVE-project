import React from "react";

function YourCart({
  salesProduct: {
    productName,
    price,
    delivery,
    amount,
    productSize,
    productPicture,
  },
}) {
  return (
    <>
      <div
        className="bg-white container-60 px-0 mt-3"
        style={{ width: "700px", height: "300px" }}
      >
        <div className="bg-primary rounded">
          <h4
            className="fw-bold text-white ms-2 fs-5 ms-3 pt-2 "
            style={{ height: "40px" }}
          >
            รถเข็นของคุณ
          </h4>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <div className="d-flex">
            <input type="checkbox" className="form-check-input ms-3" />
            <h4 className="fw-bold fs-5 ms-2 mb-0">
              น้ำดื่มตราคริสตัน 1.5 ล. แพ็ค 6 ขวด 10 แพ๊ค ราคาพิเศษ
              {/* {productName} */}
            </h4>
          </div>
          <div className="me-3">
            <p className="my-0 fw-bold">THB 480</p>
            <div
              className="bg-primary text-white rounded"
              style={{ height: "23px" }}
            >
              20% off
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <img
            src="bottle.jpg"
            alt="crystal"
            style={{ width: "150px", height: "150px" }}
          />
          <div className="d-flex align-items-center">
            <h4 className="fw-bold fs-5 mt-2">จำนวน</h4>
            <select
              className="form-select form-select-sm ms-4"
              name=""
              id=""
              style={{ height: "40px" }}
            >
              <option value="0">เลือกจำนวนแพ๊ค</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <p className="fs-6 mb-0 mt-3">ขายโดย ร้านสงขลาค้าส่ง</p>
          <p className="fs-6 mb-0 mt-3">ลบออก</p>
        </div>
      </div>
    </>
  );
}

export default YourCart;
