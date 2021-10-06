import React from "react";
import { NavLink } from "react-router-dom";

function MainPurchase({
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
      <div className=" d-flex bg-white container-80 justify-content-between ">
        <div className="col">
          <p className="fs-6">ขายโดย ร้านสงขลาค้าส่ง</p>
          <img src="bottle.jpg" alt="" width="250px" height="250px" />
          {productPicture}
          {/* <div className="d-flex">
            <img src="bottle2.jpg" alt="" width="100px" height="100px" />
            <img src="bottle2.jpg" alt="" width="100px" height="100px" />
          </div> */}
          <p className="mt-2">
            มีสินค้าทั้งหมด
            <span className="px-2">{amount}</span>
            ชิ้น
          </p>
          <div className="d-flex ">
            <p className="me-3">แชร์ดีล :</p>
            <a target="_blank" href="https://www.facebook.com" className="me-2">
              <img src="facebook.png" alt="" width="25px" />
            </a>

            <a
              target="_blank"
              href="https://www.instagram.com/"
              className="me-2"
            >
              <img src="instagram.png" alt="" width="25px" />
            </a>

            <a target="_blank" href="https://twitter.com/" className="me-2">
              <img src="twitter.png" alt="" width="25px" />
            </a>

            <a target="_blank" href="https://line.me/th/" className="me-2">
              <img src="line.png" alt="" width="25px" />
            </a>
          </div>
        </div>
        <div className="col">
          <h5 className="fw-bold mt-2">
            {/* น้ำดื่มตราคริสตัน 1.5 ล. แพ็ค 6 ขวด ราคาพิเศษ */}
            {productName}
          </h5>
          <div className="d-flex ">
            {/* <h6 className="fw-bold text-decoration-line-through me-2">
              THB 600
              {price}
            </h6> */}
            <h6 className="fw-bold me-2">ราคา</h6>
            <h6 className="fw-bold me-2 bg-primary text-white rounded">
              {price}
            </h6>
            <p>บาท</p>
            {/* <div
              className="bg-primary text-white rounded"
              style={{ height: "23px" }}
            >
              20% off
            </div> */}
          </div>
          <div className="mt-3">
            <div className="d-flex justify-content-between mt-2">
              <p>ขนาด</p>
              <p>{productSize}</p>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p>การจัดส่ง</p>
              {delivery}
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p>จำนวน</p>
              <p>ชิ้น</p>
            </div>
            <div className="text-center mt-3">
              <NavLink to="/cart">
                <button className="btn btn-outline-primary me-2">
                  เพิ่มไปยังรถเข็น
                </button>
              </NavLink>
              <NavLink to="/payment">
                <button className="btn btn-warning">ซื้อสินค้า</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPurchase;
