import React from "react";
import BeginSalesButton from "./BeginSalesButton";
import { isEmpty } from "../services/validateService";

function DeliveringSales({input,setInput,error,setError}) {

  const validateName = (value) => {
    if (isEmpty(value)) {
      return "Name is required";
    }
    return "";
  };

  const handleInputChange = e =>{
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
    <div className="bg-white container-80 mb-3 pb-1">
      <h5>การจัดส่งสินค้า</h5>
      <div className="border border-dark rounded ms-5">
        <div className="form-check mb-3 mx-2 my-3">
          <input
            className="form-check-input"
            type="radio"
            value={input.ThailandPost}
            name="deliProvider"
            id="ThailandPost"
            onChange={handleInputChange}
          />
          <label className="form-check-label" for="ThailandPost">
            Thailand Post
          </label>
        </div>
        <div className="form-check mb-3 mx-2 my-3">
          <input
            className="form-check-input"
            type="radio"
            value={input.FlashExpress}
            name="deliProvider"
            id="FlashExpress"
            onChange={handleInputChange}
          />
          <label className="form-check-label" for="FlashExpress">
            Flash Express
          </label>
        </div>
        <div className="form-check mb-3 mx-2 my-3">
          <input
            className="form-check-input"
            type="radio"
            value={input.KerryExpress}
            name="deliProvider"
            id="KerryExpress"
            onChange={handleInputChange}
          />
          <label className="form-check-label" for="KerryExpress">
            Kerry Express
          </label>
        </div>
        <div className="form-check mb-3 mx-2 my-3">
          <input
            className="form-check-input"
            type="radio"
            value={input.JandTExpress}
            name="deliProvider"
            id="jandT" 
            onChange={handleInputChange}
          />
          <label className="form-check-label" for="jandT">
            J & T Express
          </label>
        </div>
      </div>
    </div>
  );
}

export default DeliveringSales;
