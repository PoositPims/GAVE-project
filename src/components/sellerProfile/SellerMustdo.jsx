import React from "react";

function SellerMustdo() {
  return (
    <div>
      <div className="bg-white container px-0 mt-3">
        <h4 className="fw-bold fs-4 p-3 text-primary">ที่ต้องทำ</h4>
        <div className="d-flex justify-content-around">
          <div>
            <h4 className="text-center fs-3 text-warning">0</h4>
            <p className="fw-bold">ที่ต้องจัดส่ง</p>
          </div>
          <div>
            <h4 className="text-center fs-3 text-warning">0</h4>
            <p className="fw-bold">ลูกค้าขอคืนสินค้า</p>
          </div>
          <div>
            <h4 className="text-center fs-3 text-warning">0</h4>
            <p className="fw-bold">ที่ต้องรอคืนเงิน</p>
          </div>
          <div>
            <h4 className="text-center fs-3 text-warning">0</h4>
            <p className="fw-bold">สินค้าที่โปรโมท</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerMustdo;
