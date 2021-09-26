import React from "react";
import { NavLink } from "react-router-dom";

function CartPayment() {
  return (
    <>
      <div
        className="bg-white container-60 px-0 mt-3"
        style={{ width: "400px" }}
      >
        <div className="bg-primary rounded">
          <h4
            className="fw-bold text-white ms-2 fs-5 ms-3 pt-2 "
            style={{ height: "40px" }}
          >
            ชำระเงิน
          </h4>
        </div>
        <div className="d-flex justify-content-between container mt-3">
          <p className="fw-bold">ยอดรวม ( 1 รายการ )</p>
          <p className="fw-bold">THB 480</p>
        </div>
        <div className="d-flex justify-content-between container mt-3">
          <p className="fw-bold">ค่าจัดส่ง</p>
          <p className="fw-bold">-</p>
        </div>

        {/* <div className="d-flex justify-content-between container mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="โค้ดส่วนลด"
            style={{ width: "200px", height: "30px" }}
          />
          <button className="btn btn-warning" style={{ height: "30px" }}>
            Sent
          </button>
        </div> */}
        <div className="d-flex justify-content-between container  mt-3">
          <p className="fw-bold">ยอดรวมทั้งสิ้น</p>
          <div>
            <p className="my-0 fw-bold">THB 480</p>
            <div
              className="bg-primary text-white rounded"
              style={{ height: "23px" }}
            >
              20% off
            </div>
          </div>
        </div>
        <div className="text-center">
          <NavLink to="/payment">
            <button className="btn btn-warning mt-3" type="submit">
              ดำเนินการชำระเงิน
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default CartPayment;
