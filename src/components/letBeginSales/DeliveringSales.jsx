import React from "react";
import BeginSalesButton from "./BeginSalesButton";

function DeliveringSales() {
  return (
    <div className="bg-white container-80 mb-3 pb-1">
      <h5>การจัดส่งสินค้า</h5>
      {/* <div className="form-check mb-3">
        <input
          className="form-check-input"
          type="radio"
          value="deliOption1"
          id="exampleRadios1"
          name="deliOption"
        />
        <label className="form-check-label" for="exampleRadios1">
          กระจายสินค้าผ่าน community leader
          <span className="text-danger ms-3">
            *จะต้องส่งภายใน 5 วัน หลังจากที่สิ้นสุดดีล
          </span>
        </label>
      </div> */}
      {/* <div className="form-check mb-3 ">
        <input
          className="form-check-input "
          type="radio"
          value="deliOption2"
          id="exampleRadios2"
          name="deliOption"
        />
        <div className="d-flex">
          <label className="form-check-label" for="exampleRadios2">
            ส่งผ่าน delivery company
          </label>
          <div className="border border-dark rounded ms-5">
            <div className="form-check mb-3 mx-2 my-3">
              <input
                className="form-check-input"
                type="radio"
                value="ThailandPost"
                name="deliProvider"
                id="ThailandPost"
              />
              <label className="form-check-label" for="ThailandPost">
                Thailand Post
              </label>
            </div>
            <div className="form-check mb-3 mx-2 my-3">
              <input
                className="form-check-input"
                type="radio"
                value="FlashExpress"
                name="deliProvider"
                id="FlashExpress"
              />
              <label className="form-check-label" for="FlashExpress">
                Flash Express
              </label>
            </div>
            <div className="form-check mb-3 mx-2 my-3">
              <input
                className="form-check-input"
                type="radio"
                value="KerryExpress"
                name="deliProvider"
                id="KerryExpress"
              />
              <label className="form-check-label" for="KerryExpress">
                Kerry Express
              </label>
            </div>
            <div className="form-check mb-3 mx-2 my-3">
              <input
                className="form-check-input"
                type="radio"
                value="jandT"
                name="deliProvider"
                id="jandT"
              />
              <label className="form-check-label" for="jandT">
                J & T Express
              </label>
            </div>
          </div>
        </div>
      </div> */}
      <div className="border border-dark rounded ms-5">
        <div className="form-check mb-3 mx-2 my-3">
          <input
            className="form-check-input"
            type="radio"
            value="ThailandPost"
            name="deliProvider"
            id="ThailandPost"
          />
          <label className="form-check-label" for="ThailandPost">
            Thailand Post
          </label>
        </div>
        <div className="form-check mb-3 mx-2 my-3">
          <input
            className="form-check-input"
            type="radio"
            value="FlashExpress"
            name="deliProvider"
            id="FlashExpress"
          />
          <label className="form-check-label" for="FlashExpress">
            Flash Express
          </label>
        </div>
        <div className="form-check mb-3 mx-2 my-3">
          <input
            className="form-check-input"
            type="radio"
            value="KerryExpress"
            name="deliProvider"
            id="KerryExpress"
          />
          <label className="form-check-label" for="KerryExpress">
            Kerry Express
          </label>
        </div>
        <div className="form-check mb-3 mx-2 my-3">
          <input
            className="form-check-input"
            type="radio"
            value="jandT"
            name="deliProvider"
            id="jandT"
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
