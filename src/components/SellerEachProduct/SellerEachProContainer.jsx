import React from "react";

function SellerEachProContainer() {
  return (
    <>
      <h3 className="fw-bold text-primary" style={{ marginLeft: "100px" }}>
        สินค้าของฉัน
      </h3>
      <div className=" d-flex bg-white container-80 justify-content-between ">
        <div className=" border-end border-3 border-grey">
          <h5 className="fw-bold mt-2">
            น้ำดื่มตราคริสตัน 1.5 ล. แพ็ค 6 ขวด ราคาพิเศษ
          </h5>
          <div className="text-end">
            <p className="text-primary mb-0 me-2">แก้ไขชื่อ</p>
          </div>
          <img src="bottle.jpg" alt="" width="250px" height="250px" />
          <div className="d-flex">
            <img src="bottle2.jpg" alt="" width="100px" height="100px" />
            <img src="bottle2.jpg" alt="" width="100px" height="100px" />
          </div>
          <p className="text-primary mb-0 me-3 text-end ">แก้ไขรูป</p>
        </div>
        {/*  */}
        {/*  */}
        <div className="col ms-2">
          <div className="d-flex ">
            <h5 className="fw-bold ms-3 mt-2">รายละเอียดสินค้า</h5>
          </div>
          <div className="mt-3">
            <div className="d-flex justify-content-between mt-2">
              <p className="fw-bold text-warning">ราคา</p>
              <p>600 บาท</p>
              <p className="text-primary mb-0" style={{ marginTop: "10px" }}>
                แก้ไข
              </p>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p className="fw-bold text-warning">ส่วนลด</p>
              <p>20%</p>
              <p className="text-primary mb-0" style={{ marginTop: "10px" }}>
                แก้ไข
              </p>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p className="fw-bold text-warning">คลัง</p>
              <p>100 ชิ้น</p>
              <p className="text-primary mb-0" style={{ marginTop: "10px" }}>
                แก้ไข
              </p>
            </div>

            {/*  */}
            {/*  */}
            <div className="d-flex justify-content-between mt-2">
              <p className="fw-bold text-warning">ดีล</p>
              <p>10 แพ๊ค น้ำดื่มตราคริสตัน 1.5 ล. แพ็ค 6 ขวด </p>
              <p className="text-primary mb-0" style={{ marginTop: "10px" }}>
                แก้ไข
              </p>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p className="fw-bold text-warning">สิ้นสุดดีล</p>
              <p>23/07/21</p>
              <p className="text-primary mb-0" style={{ marginTop: "10px" }}>
                แก้ไข
              </p>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p className="fw-bold text-warning">ขนาด</p>
              <p>1.5 ลิตร แพ๊ค 6 ขวด (จำนวน 10 ลิตร)</p>
              <p className="text-primary mb-0" style={{ marginTop: "10px" }}>
                แก้ไข
              </p>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p className="fw-bold text-warning">การจัดส่ง</p>
              <p>กระจายสินค้าผ่านตัวแทน ในวันที่ 25/07/21</p>
              <p className="text-primary mb-0" style={{ marginTop: "10px" }}>
                แก้ไข
              </p>
            </div>

            <div className="d-flex justify-content-between mt-2">
              <p className="fw-bold text-warning">เงื่อนไข</p>
              <p>เฉพาะในจังหวัดสงขลาเท่านั้น</p>
              <p className="text-primary mb-0" style={{ marginTop: "10px" }}>
                แก้ไข
              </p>
            </div>
            <div className="text-center mt-3">
              <button className="btn btn-outline-primary me-2">
                ยืนยันแต่ยังไม่ขาย
              </button>
              <button className="btn btn-warning">ยืนยันและลงขาย</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerEachProContainer;
