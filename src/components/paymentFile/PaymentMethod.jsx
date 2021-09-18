import React from "react";

function PaymentMethod() {
  return (
    <>
      <div className=" d-flex  justify-content-evenly">
        <div className="bg-white container-60 px-0 mt-3  ">
          <div className="bg-primary rounded">
            <h4
              className="fw-bold text-white ms-2 fs-5 ms-3 pt-2 "
              style={{ height: "40px" }}
            >
              วิธีชำระเงิน
            </h4>
          </div>

          <div class="form-check ms-2">
            <input
              class="form-check-input"
              type="radio"
              name="payMethood"
              id="creditOrDebit"
              value="creditOrDebit"
              defaultChecked
            />
            <label class="form-check-label" for="creditOrDebit">
              Credit / Debit Card
            </label>
            <div className="d-flex flex-column input-group mb-3">
              <div
                className="input-group input-group-sm mb-2 mt-2"
                style={{ width: "400px" }}
              >
                <input
                  type="text"
                  className="form-control  bg-white"
                  placeholder="ชื่อที่ปรากฎอยู่บนบัตร"
                />
              </div>

              <div className="input-group input-group-sm mb-2">
                <div style={{ width: "400px" }}>
                  <input
                    type="text"
                    className="form-control input-group-sm bg-white"
                    placeholder="เลขบัตร"
                  />
                </div>
                <img src="visa.png" alt="" width="35px" height="35px" />
                <img src="Mastercard.jpg" alt="" width="35px" height="35px" />
                <img src="jcb.png" alt="" width="35px" height="35px" />
              </div>

              <div className="d-flex input-group input-group-sm ">
                <div className="me-3" style={{ width: "190px" }}>
                  <p className="my-0 fs-6">วันหมดอายุ</p>
                  <input
                    type="text"
                    className="form-control input-group-sm bg-white"
                    placeholder="ดด/ปป"
                  />
                </div>
                <div style={{ width: "190px" }}>
                  <p className="my-0 fs-6">CVV</p>
                  <input
                    type="text"
                    className="form-control bg-white"
                    placeholder="000"
                  />
                </div>
              </div>
              <div
                className="input-group input-group-sm mb-2 mt-2"
                style={{ width: "400px" }}
              >
                <input
                  type="text"
                  className="form-control  bg-white"
                  placeholder="ที่อยู่"
                />
              </div>
              <div
                className="input-group input-group-sm mb-2 mt-2"
                style={{ width: "400px" }}
              >
                <input
                  type="text"
                  className="form-control  bg-white"
                  placeholder="รหัสไปรษณีย์"
                />
              </div>
            </div>
          </div>
          <div class="form-check  mb-2 ms-2">
            <input
              class="form-check-input"
              type="radio"
              name="payMethood"
              id="GavePay"
              value="GavePay"
            />
            <label class="form-check-label" for="GavePay">
              Gave Pay
            </label>
          </div>

          <div class="form-check mb-2 ms-2">
            <input
              class="form-check-input"
              type="radio"
              name="payMethood"
              id="ATMPay"
              value="ATMPay"
            />
            <label class="form-check-label" for="ATMPay">
              ชำระผ่าน ATM
            </label>
          </div>

          <div class="form-check mb-2 ms-2">
            <input
              class="form-check-input"
              type="radio"
              name="payMethood"
              id="destinationPay"
              value="destinationPay"
            />
            <label class="form-check-label" for="destinationPay">
              ชำระเงินปลายทาง
            </label>
          </div>
        </div>
        <div className="bg-white container-50 px-0 mt-3">
          <div className="bg-primary rounded">
            <h4
              className="fw-bold text-white fs-5  pt-2 ms-3 pt-2"
              style={{ height: "40px" }}
            >
              สรุปคำสั่งซื้อ
            </h4>
          </div>
          <div>
            <div className="d-flex justify-content-between ps-3 pe-3 mb-2 mt-5">
              <p>ยอมรวม (1 รายการ)</p>
              <p>THB 480</p>
            </div>
            <div className="d-flex justify-content-between ps-3 pe-3 mb-2 mt-5">
              <p>ยอมรวมทั้งสิ้น</p>
              <div>
                <p className="my-0">THB 480</p>
                <div
                  className="bg-primary text-white rounded"
                  style={{ height: "23px" }}
                >
                  20% off
                </div>
              </div>
            </div>
            <div className=" text-center mt-4">
              <button className="btn btn-warning">ชำระเงิน</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentMethod;
