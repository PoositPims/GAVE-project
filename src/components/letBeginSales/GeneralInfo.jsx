import React from "react";

function GeneralInfo() {
  return (
    <div>
      <div className="bg-white container-80 ">
        <h5 className="pt-3">ข้อมูลทั่วไป</h5>

        <div className="d-flex input-group mt-3 container row ">
          <div className="col-2">
            <p>ชื่อสินค้า</p>
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              name=""
              placeholder="0/120"
              style={{ width: "700px" }}
            />
          </div>
        </div>

        <div className="d-flex input-group mt-3 container row">
          <div className="col-2">
            <p>ราคา</p>
          </div>
          <div className="col">
            <input
              className="form-control "
              type="text"
              name=""
              placeholder="ราคา (บาท)"
              style={{ width: "150px" }}
            />
          </div>
        </div>
        <div className="d-flex input-group mt-3 container row ">
          <div className="col-2">
            <p>ส่วนลด</p>
          </div>
          <div className="col">
            <input
              className="form-control"
              type="text"
              name=""
              placeholder="ส่วนลด (บาท)"
              style={{ width: "150px" }}
            />
          </div>
        </div>

        <div className="d-flex input-group mb-3 mt-3 ">
          <h6 className="mt-3">รูปภาพสินค้า</h6>

          <div className="text-center me-5 ms-5 ">
            <div className="inputEach">
              <img src="add.png" width="50px" alt="" />
            </div>
            <p>ภาพปก</p>
          </div>
          <div className="text-center me-5">
            <div className="inputEach">
              <img src="add.png" width="50px" alt="" />
            </div>
            <p>ภาพปกที่ 1</p>
          </div>
          <div className="text-center me-5">
            <div className="inputEach">
              <img src="add.png" width="50px" alt="" />
            </div>
            <p>ภาพปกที่ 2</p>
          </div>
          <div className="text-center">
            <div className="inputEach">
              <img src="add.png" width="50px" alt="" />
            </div>
            <p>เพิ่อมรูปภาพ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
