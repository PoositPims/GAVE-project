import React from "react";
import EachProductCategory from "../../services/eachCategory/EachProductCategory";

function FoodCateContainer() {
  return (
    <div>
      <div className="container bg-white ">
        <img src="" alt="" />
        <h3 className="fw-bold bg-white text-primary">อาหารและเครื่องดื่ม</h3>
      </div>
      <EachProductCategory />
      <EachProductCategory />
    </div>
  );
}

export default FoodCateContainer;
