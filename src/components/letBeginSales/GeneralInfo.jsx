import React from "react";
import { isEmpty } from "../services/validateService";

function GeneralInfo({input,setInput,error,setError}) {

  const validateName = ({value}) => {
    if (isEmpty(value)) {
      return "Name is required";
    }
    return "";
  };

  const handleInputChange = e => {
    if (e.target.value === "") {
      // setError("กรุณากรอกข้อมูล");
      setError((curErr) => ({
        ...curErr,
        value: validateName(e.target.value),
        // ผิดตรง value
      }));
      // ............................แก้บรรทัดนี้................................
    } else {
      setError("");
    }
    // console.log(e.target.value);
    // console.log(e.target.name);
    setInput((current) => ({ ...current, [e.target.name]: e.target.value }));
  }

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
              name="productName"
              value={input.productName}
              onChange={handleInputChange}
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
              name="price"
              placeholder="ราคา (บาท)"
              style={{ width: "150px" }}
              value={input.price}
              onChange={handleInputChange}
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
              name="discount"
              placeholder="ส่วนลด (บาท)"
              style={{ width: "150px" }}
              value={input.discount}
              onChange={handleInputChange}
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
