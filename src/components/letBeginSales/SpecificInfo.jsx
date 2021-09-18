import React from "react";

function SpecificInfo() {
  return (
    <div className="bg-white container-80 mb-3 pb-3">
      <h5>ข้อมูลจำเพาะ</h5>
      <div className="d-flex justify-content-evenly ">
        <div className="col mx-3">
          <div className=" d-flex input-group my-2">
            <h6 className="mb-3">แบรนด์</h6>
            <input type="text" className="form-control ms-5  " />
          </div>
          <div className=" d-flex input-group my-2">
            <h6 className="mb-3">วัสดุ</h6>
            <input type="text" className="form-control ms-5  " />
          </div>
          <div className=" d-flex input-group my-2">
            <h6 className="mb-3">สภาพของสินค้า</h6>
            <input type="text" className="form-control ms-5  " />
          </div>
          <div className=" d-flex input-group my-2">
            <h6 className="mb-3">สี</h6>
            <input type="text" className="form-control ms-5  " />
          </div>
        </div>
        <div className="col mx-3">
          <div className=" d-flex input-group my-2">
            <h6 className="mb-3">ขนาด</h6>
            <input type="text" className="form-control ms-5  " />
          </div>
          <div className=" d-flex input-group my-2">
            <h6 className="mb-3">ขนาดบรรจุ</h6>
            <input type="text" className="form-control ms-5  " />
          </div>
          <div className=" d-flex input-group my-2">
            <h6 className="mb-3">ปริมาณ</h6>
            <input type="text" className="form-control ms-5  " />
          </div>
          <div className=" d-flex input-group my-2">
            <h6 className="mb-3">น้ำหนัก</h6>
            <input type="text" className="form-control ms-5  " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecificInfo;
