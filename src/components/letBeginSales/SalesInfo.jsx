import React from "react";

function SalesInfo() {
  return (
    <div className="bg-white container-80 mb-3  pb-1">
      <h5>ข้อมูลการขาย</h5>

      <div className=" d-flex input-group my-2">
        <h6 className="mb-3">ราคาก่อนดีล</h6>
        <input type="text" className="form-control ms-5  " />
      </div>
      <div className=" d-flex input-group my-2">
        <h6 className="mb-3">คลัง</h6>
        <input type="text" className="form-control ms-5  " />
      </div>
      <div className="d-flex input-group mb-3 ">
        <h6>รูปภาพสินค้า</h6>
        <div className="text-center me-5 ms-5">
          <div className="inputEach">
            <img src="add.png" width="50px" alt="" />
          </div>
          <p>SKU 1</p>
        </div>
        <div className="text-center me-5">
          <div className="inputEach">
            <img src="add.png" width="50px" alt="" />
          </div>
          <p>เพิ่ม SKU</p>
        </div>
      </div>
    </div>
  );
}

export default SalesInfo;
