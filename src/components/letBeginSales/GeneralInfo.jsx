import React from "react";

function GeneralInfo() {
  return (
    <div>
      <div className="bg-white container-80 ">
        <h5 className="pt-3">ข้อมูลทั่วไป</h5>

        <div className="d-flex input-group mb-3  ">
          <h6 className="mt-3">ชื่อสินค้า</h6>
          <input
            className="form-control ms-5  "
            type="text"
            name=""
            placeholder="0/120"
          />
        </div>

        <div className="d-flex input-group mb-3 ">
          <h6 className="mt-3">กรุณาใส่หมวดหมู่สินค้า</h6>
          <input
            className="form-control ms-5  "
            type="text"
            name=""
            placeholder="0/120"
          />
        </div>

        <div className="d-flex input-group mb-3 ">
          <h6 className="mt-3">รูปภาพสินค้า</h6>

          <div className="text-center me-5 ms-5">
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

        <div className="d-flex input-group mb-3 ">
          <div>
            <h6 className="mt-3 my-0">วิดีโอสินค้า</h6>
            <p className="my-0">(Optional)</p>
          </div>
          <div className="text-center me-5 ms-5">
            <div className="inputEach">
              <img src="add.png" width="50px" alt="" />
            </div>
            <p>วิดีโอสินค้า</p>
          </div>
          <div className="text-center me-5">
            <div className="inputEach">
              <img src="add.png" width="50px" alt="" />
            </div>
            <p>เพิ่มวิดีโอ</p>
          </div>
        </div>

        <div className="d-flex input-group mb-3 pb-3  ">
          <h6 className="mt-3 my-0">รายละเอียดสินค้า</h6>
          <input
            className="form-control ms-5 inputInfoVeryLong  "
            type="text"
            name=""
            placeholder="0/5000"
          />
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
