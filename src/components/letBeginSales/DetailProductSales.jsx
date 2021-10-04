import React from "react";
import { isEmpty } from "../services/validateService";

function DetailProductSales({input,setInput,error,setError}) {

  const validateName = (value) => {
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
    <>
      <div className="bg-white container-80 ">
        <div className="d-flex flex-column input-group mb-3 pb-3  ">
          <h5 className="mt-3 my-0">รายละเอียดสินค้า</h5>
          <div className="container">
            <div className="d-flex mt-3 container row">
              <div className="col-2">
                <p>ขนาด</p>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  style={{ width: "350px" }}
                  onChange={handleInputChange}
                  value={input.productSize}
                  name='productSize'
                />
              </div>
            </div>

            {/* <div className="d-flex mt-3 container row">
              <div className="col-2">
                <p>การจัดส่ง</p>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  style={{ width: "350px" }}
                  onChange={handleInputChange}
                  value={input.delivery}
                  name='delivery'
                />
              </div>
            </div> */}

            <div className="d-flex mt-3 container row">
              <div className="col-2">
                <p>มีสินค้าทั้งหมด</p>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  style={{ width: "350px" }}
                  onChange={handleInputChange}
                  value={input.amount}
                  name='amount'
                />
              </div>
            </div>

            {/* <div className="d-flex mt-3 container row">
              <div className="col-2">
                <p>รายละเอียดอื่น ๆ</p>
              </div>
              <div className="col">
                <input
                  className="form-control "
                  type="text"
                  name=""
                  placeholder="0/5000"
                  style={{ width: "600px", height: "200px" }}
                  onChange={handleInputChange}
                  value={input}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailProductSales;
