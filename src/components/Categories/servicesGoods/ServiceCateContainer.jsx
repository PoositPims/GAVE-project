import React from "react";
import EachProductCategory from "../../services/eachCategory/EachProductCategory";
// import ServicesProducts from "./ServicesProducts";

function ServiceCateContainer() {
  return (
    <div>
      <div className="container bg-white ">
        <h3 className="fw-bold bg-white text-primary">บริการต่าง ๆ</h3>
      </div>
      <EachProductCategory />
      <EachProductCategory />
      <EachProductCategory />
    </div>
  );
}

export default ServiceCateContainer;
