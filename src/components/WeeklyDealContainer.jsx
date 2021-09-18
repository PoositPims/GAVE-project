import React from "react";
import WeeklyDealCard from "./homePageFile/weekly/WeeklyDealCard";

function WeeklyDealContainer() {
  return (
    <div>
      <div className="bg-white mt-3 align-items-center ">
        <h3 className="navbar-brand fs-4 fw-bolder py-0 my-0 px-4 ">
          ดีลขายดีประจำสัปดาห์
        </h3>
        <div className=" d-flex justify-content-evenly align-items-end bg-white">
          <WeeklyDealCard
            productPic="bottle.jpg"
            productName="น้ำดื่มคริสตัล"
            price="480"
          />
          <WeeklyDealCard
            productPic="rice.jpg"
            productName="ข้าวตราฉัตร"
            price="99"
          />
          <WeeklyDealCard
            productPic="rice.jpg"
            productName="ข้าวตราฉัตร"
            price="99"
          />
          <WeeklyDealCard
            productPic="rice.jpg"
            productName="ข้าวตราฉัตร"
            price="99"
          />
        </div>
      </div>
    </div>
  );
}

export default WeeklyDealContainer;
