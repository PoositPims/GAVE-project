import React from "react";

function DetailProductSales() {
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
                />
              </div>
            </div>

            <div className="d-flex mt-3 container row">
              <div className="col-2">
                <p>การจัดส่ง</p>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  style={{ width: "350px" }}
                />
              </div>
            </div>

            <div className="d-flex mt-3 container row">
              <div className="col-2">
                <p>มีสินค้าทั้งหมด</p>
              </div>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  style={{ width: "350px" }}
                />
              </div>
            </div>

            <div className="d-flex mt-3 container row">
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
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailProductSales;
