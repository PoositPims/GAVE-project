import React from "react";

function CustomerPurReview() {
  return (
    <div>
      <div className="d-flex justify-content-between bg-white container-80 mt-3">
        <div>
          <h5 className="fw-bold text-primary mb-3">คะแนนของลูกค้า</h5>
          <p>ยังไม่มีการให้คะแนนสินค้า</p>
        </div>
        <div className="d-flex flex-column ">
          <img src="coke.jpg" alt="" height="200px" width="180px" />
          <img src="doritos.png" alt="" height="200px" width="180px" />
        </div>
      </div>
    </div>
  );
}

export default CustomerPurReview;
