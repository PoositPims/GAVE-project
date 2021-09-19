import React from "react";

function WaysToCOntact() {
  return (
    <>
      <div className="d-flex justify-content-evenly">
        <div className="mt-4">
          <h4 className="text-primary fw-bold mb-3">ติดต่อเราทางแชท</h4>
          <div
            className=" bg-white rounded pt-4 ps-3"
            style={{ width: "300px", height: "150px" }}
          >
            <p className="fw-bold ">แชทกับ GAVE</p>
            <p className="my-0 fw-bold ">แชทเปิดให้บริการตลอด 24 ชั่วโมง</p>
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-primary fw-bold mb-3">ติดต่อเราทางโทรศัพท์</h4>
          <div
            className="bg-white rounded pt-4 ps-3"
            style={{ width: "400px", height: "150px" }}
          >
            <p className="fw-bold">โทรคุยกับ GAVE</p>
            <p className="fw-bold">02-000-0000</p>
            <p className="my-0 fw-bold">
              ให้บริการทุกวันจันทร์ - เสาร์ เวลา 8.00 น. ถึง 20.00 น.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WaysToCOntact;
