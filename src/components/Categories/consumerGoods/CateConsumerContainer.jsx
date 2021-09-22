import React from "react";
import EachProductCategory from "../../services/eachCategory/EachProductCategory";

function CateConsumerContainer() {
  return (
    <>
      <div className="container bg-white ">
        <img src="" alt="" />
        <h3 className="fw-bold bg-white text-primary">อุปโภค บริโภค</h3>
      </div>
      <EachProductCategory />
      <EachProductCategory />
    </>
  );
}

export default CateConsumerContainer;
