import React from "react";

function DealInfo() {
  return (
    <div className="bg-white container-80 mb-3 pb-1">
      <h5>ข้อมูลดีล</h5>
      <div className=" d-flex input-group my-2">
        <h6 className="mb-3">สถานที่ที่เข้าร่วมดีล</h6>
        <input type="text" className="form-control ms-5  " />
      </div>
      <div className=" d-flex input-group my-2">
        <h6 className="mb-3">ระยะเวลาสิ้นสุดดีล</h6>
        <input type="text" className="form-control ms-5  " />
      </div>
      <div className=" d-flex input-group my-2">
        <h6 className="mb-3">จำนวนผู้ซื้อขั้นต่ำถึงจะเกิดดีล</h6>
        <input type="text" className="form-control ms-5  " />
      </div>
      <div className=" d-flex input-group my-2">
        <h6 className="mb-3">ราคาที่เข้าร่วมดีล</h6>
        <input type="text" className="form-control ms-5  " />
      </div>
      <div className="d-flex input-group mb-3 ">
        <h6>ตัวเลือกดีลเพิ่มเติม</h6>
        <div className="text-center me-5 ms-5">
          <div className="inputEach">
            <img src="add.png" width="50px" alt="" />
          </div>
          <p>ดีล 1</p>
        </div>
        <div className="text-center me-5">
          <div className="inputEach">
            <img src="add.png" width="50px" alt="" />
          </div>
          <p>เพิ่มดีล</p>
        </div>
      </div>
    </div>
  );
}

export default DealInfo;
