import React from "react";
import EachProductCateCard from "./EachProductCateCard";

function EachProductCategory() {
  return (
    <>
      <div className=" d-flex justify-content-evenly bg-white mt-2 align-items-center container border-bottom border-3 border-warning ">
        <EachProductCateCard
          productPic="bottle.jpg"
          productName="น้ำดื่มคริสตัล"
          productPrice="40,000"
        />
        <EachProductCateCard
          productPic="bottle.jpg"
          productName="น้ำดื่มคริสตัล"
          productPrice="480"
        />
        <EachProductCateCard
          productPic="bottle.jpg"
          productName="น้ำดื่มคริสตัล"
          productPrice="480"
        />
        <EachProductCateCard
          productPic="bottle.jpg"
          productName="น้ำดื่มคริสตัล"
          productPrice="480"
        />
        <EachProductCateCard
          productPic="bottle.jpg"
          productName="น้ำดื่มคริสตัล"
          productPrice="480"
        />
      </div>
    </>
  );
}

export default EachProductCategory;
