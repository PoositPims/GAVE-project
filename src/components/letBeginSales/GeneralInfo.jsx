import React, { useState } from "react";
import { isEmpty } from "../services/validateService";

function GeneralInfo({ input, setInput, error, setError, setProductPicture }) {
  // const [productPicture, setProductPicture] = useState(null);
  const validateName = ({ value }) => {
    if (isEmpty(value)) {
      return "Name is required";
    }
    return "";
  };

  const handleInputChange = (e) => {
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
    setInput((current) => ({ ...current, [e.target.name]: e.target.value }));
  };

  const handleChangeFile = (e) => {
    console.log(e.target.files);
    setProductPicture(e.target.files[0]);
  };

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
            <p>รูปภาพสินค้า</p>
          </div>
          <div className="col">
            <input
              className="form-control"
              type="file"
              name="image"
              style={{ width: "250px" }}
              // value={productPicture}
              // onChange={handleInputChange}
              onChange={handleChangeFile}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
