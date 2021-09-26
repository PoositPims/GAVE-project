import React from "react";
import CategoryCard from "./CategoryCard";

function CategoryContainer() {
  return (
    <div>
      <div className=" d-flex justify-content-around align-items-end bg-white py-2">
        {/* <div className="text-center ">
          <img src="groceries.png" alt="" width="89" height="89" />
          <h5>อุปโภค บริโภค </h5>
        </div> */}

        <CategoryCard productPic="groceries.png" productName="อุปโภค บริโภค" />

        <CategoryCard
          productPic="customer-service.png"
          productName="บริการต่าง ๆ"
        />

        <CategoryCard
          productPic="burger.png"
          productName="อาหารและเครื่องดื่ม"
        />
        {/* <CategoryCard
          productPic="flight.png"
          productName="การท่องเที่ยวและประสบการณ์ต่าง ๆ"
        /> */}
        <CategoryCard
          productPic="clothes-rack.png"
          productName="เสื้อผ้าและสินค้าแฟชัน"
        />
        <CategoryCard
          productPic="multiscreen.png"
          productName="สินค้าอิเล็กทรอนิกส์"
        />
      </div>
    </div>
  );
}

export default CategoryContainer;
