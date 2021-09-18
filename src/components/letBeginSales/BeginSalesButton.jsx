import React from "react";

function BeginSalesButton() {
  return (
    <div className="d-flex container-80 justify-content-end ">
      <div>
        <button className="btn btn-secondary btn-sm ms-1  ">ยกเลิก</button>
      </div>
      <div>
        <button className="btn btn-primary btn-sm ms-1 ">บันทึกและซ่อน</button>
      </div>
      <div>
        <button className="btn btn-warning btn-sm ms-1 ">บันทึกและขาย</button>
      </div>
    </div>
  );
}

export default BeginSalesButton;
