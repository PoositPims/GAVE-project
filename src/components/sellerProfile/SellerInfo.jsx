import React from "react";

function SellerInfo({fetchSalesInfo}) {
  return (
    <>
      <div className="bg-white container px-0 mt-3">
        <div className="d-flex">
          <div className="ms-3 col" style={{ marginTop: "20px" }}>
            <img
              src="shopIcon.png"
              alt=""
              style={{ width: "80px", marginTop: "20px", marginLeft: "20px" }}
              className="text-center"
            />
            <p>
              <span className="fw-bold text-primary">ชื่อร้าน: </span>
              สงขลาค้าส่ง{" "}
            </p>
          </div>
          <div className="col " style={{ marginTop: "20px" }}>
            <p>
              <span className="fw-bold text-primary">
                เปิดร้านเมื่อวันที่ :
              </span>
              {` 01-01-2020`}
            </p>
            <p>
              <span className="fw-bold text-primary">ที่อยู่ร้าน :</span>
              {` ถ. สามชัย อ.หาดใหญ่ จ.สงขลา`}
            </p>
            <p>
              <span className="fw-bold text-primary">ชื่อเจ้าของร้าน :</span>
              {` นายหัว `}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerInfo;
