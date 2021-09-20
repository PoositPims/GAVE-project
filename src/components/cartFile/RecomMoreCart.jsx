import React from "react";
import RecomCard from "./RecomCard";

function RecomMoreCart() {
  return (
    <>
      <div className="bg-white container px-0 mt-3">
        <h4 className="fw-bold fs-4 ms-3 ">สินค้าใกล้เคียง</h4>
        <div>
          <div className=" d-flex justify-content-evenly bg-white mt-2 align-items-center  container ">
            <RecomCard
              productPic="paris.jpg"
              productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
              productPrice="40,000"
            />
            <RecomCard
              productPic="paris.jpg"
              productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
              productPrice="40,000"
            />
            <RecomCard
              productPic="paris.jpg"
              productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
              productPrice="40,000"
            />
            <RecomCard
              productPic="paris.jpg"
              productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
              productPrice="40,000"
            />
            <RecomCard
              productPic="paris.jpg"
              productName="ดีลท่องเที่ยวฝรั่งเศสกลุ่ม"
              productPrice="40,000"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RecomMoreCart;
