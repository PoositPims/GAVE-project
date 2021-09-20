import React from "react";

function DeliverPlace() {
  return (
    <div>
      <div className="bg-white container px-0 mt-3">
        <h4 className="fw-bold fs-5 p-3 text-primary">สถานที่จัดส่ง</h4>
        <div className="d-flex justify-content-between">
          <div className="ms-3">
            <p>นาย ปีเตอร์ แอมโบรสฟ</p>
            <p className="mb-0">089-xxx-xxxx</p>
          </div>
          <div>
            <p>
              14/454 ซ.พาร์คแลนด์ 2 ถ.แมนยู เมืองแมนเชสเตอร์ สหราชอาณาจักร,
              10000
            </p>
            <p className="mb-0">(ค่าเริ่มต้น)</p>
          </div>
          <p className="mb-0">แก้ไขที่อยู่</p>
        </div>
      </div>
    </div>
  );
}

export default DeliverPlace;
