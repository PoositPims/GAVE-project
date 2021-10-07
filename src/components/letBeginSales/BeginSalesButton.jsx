import React from "react";

function BeginSalesButton({ handleSubmitForm, handleSaveButNotSell }) {
  return (
    <div className="d-flex container-80 justify-content-end ">
      <div>
        <button className="btn btn-secondary btn-sm ms-1 ">ยกเลิก</button>
      </div>
      <div>
        <button
          className="btn btn-primary btn-sm ms-1 "
          type="submit"
          onClick={handleSaveButNotSell}
        >
          บันทึกและซ่อน
        </button>
      </div>
      <div>
        <button
          className="btn btn-warning btn-sm ms-1 "
          type="submit"
          onClick={handleSubmitForm}
        >
          บันทึกและขาย
        </button>
      </div>
    </div>
  );
}

export default BeginSalesButton;
