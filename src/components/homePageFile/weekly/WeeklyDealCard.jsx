import React from "react";

function WeeklyDealCard({ productPic, productPicName, productName, price }) {
  return (
    <div>
      <div className="text-center">
        <img src={productPic} alt={productPicName} width="150" height="150" />
        <h5>{productName}</h5>
        <h6>THB {price}</h6>
      </div>
    </div>
  );
}

export default WeeklyDealCard;
