import React from "react";

function CategoryCard({ productName, productPic }) {
  return (
    <div>
      <div className="text-center ">
        <img src={productPic} alt="" width="89" height="89" />
        <h5 className="">{productName}</h5>
        <p class="text-pink">.text-primary</p>
      </div>
    </div>
  );
}

export default CategoryCard;
