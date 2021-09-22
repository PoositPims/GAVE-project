import React from "react";
import EachProductCategory from "../../services/eachCategory/EachProductCategory";

function ClothCateContainer() {
  return (
    <>
      <div className="container bg-white ">
        <img src="" alt="" />
        <h3 className="fw-bold bg-white text-primary">เสื้อผ้า</h3>
      </div>
      <EachProductCategory />
      <EachProductCategory />
    </>
  );
}

export default ClothCateContainer;
