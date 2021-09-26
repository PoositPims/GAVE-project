import React from "react";

function SellerRevenue() {
  return (
    <div>
      <div className="bg-white container px-0 mt-3">
        <h4 className="fw-bold fs-4 p-3 text-primary">ภาพรวมรายได้ของฉัน</h4>
        <div className="d-flex">
          <div
            className="ms-3 border-end border-3 border-primary"
            style={{ width: "250px", height: "120px" }}
          >
            <p className="fw-bold fs-5">รายได้ที่สามารถโอนได้</p>
            <p>
              THB
              <span className="fw-bold text-warning ms-2 fs-4"> 0</span>
            </p>
          </div>
          {/*  */}
          {/* <div className="ms-5">
            <p className="fw-bold fs-5">เงินที่โอนแล้วทั้งหมด</p>
            <div className="d-flex">
              <div>
                <p className="text-primary">สัปดาห์นี้</p>
                <p>
                  THB
                  <span className="fw-bold text-warning fs-4"> 0</span>
                </p>
              </div>
              <div className="" style={{ marginLeft: "100px" }}>
                <p className="text-primary">เดือนนี้</p>
                <p>
                  THB
                  <span className="fw-bold text-warning fs-4"> 0</span>
                </p>
              </div>
              <div className="" style={{ marginLeft: "100px" }}>
                <p className="text-primary">ทั้งหมด</p>
                <p>
                  THB
                  <span className="fw-bold text-warning fs-4"> 0</span>
                </p>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="d-flex justify-content-between mt-3">
          <p className="ms-3">บัญชีธนาคารของฉัน: xxxx xxxx xxxx xxxx</p>
          <button className="btn btn-warning me-3 mb-2">โอนเงิน</button>
        </div> */}
      </div>
    </div>
  );
}

export default SellerRevenue;
