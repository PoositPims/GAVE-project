import React from "react";

function SpecificPurInfo() {
  return (
    <>
      <div className="bg-white container-80 mt-3">
        <h5 className="mb-3 fw-bold text-primary">ข้อมูลเฉพาะสินค้า</h5>
        <div className="d-flex justify-content-between ">
          <p>หมวดหมู่</p>
          <p>
            GAVE &gt; อาหารและเครื่องดื่ม &gt; เครื่องดื่ม &gt; น้ำดื่ม &gt;
            น้ำดื่มตราคริสตัน
          </p>
        </div>
        <div className="d-flex justify-content-between ">
          <p>ยี่ห้อ</p>
          <p>น้ำดื่มตราคริสตัน</p>
        </div>
        <div className="d-flex justify-content-between ">
          <p>อายุการเก็บรักษา</p>
          <p>24 เดือน</p>
        </div>
        <div className="d-flex justify-content-between ">
          <p>น้ำหนัก</p>
          <p>35 kg</p>
        </div>
        <div className="d-flex justify-content-between ">
          <p>จำนวนสินค้า</p>
          <p>60</p>
        </div>
        <div className="d-flex justify-content-between ">
          <p>ส่งจาก</p>
          <p>อำเภอหาดใหญ่ จังหวัดสงขลา</p>
        </div>
      </div>
    </>
  );
}

export default SpecificPurInfo;
