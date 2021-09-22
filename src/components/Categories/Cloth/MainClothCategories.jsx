import React from "react";
import ConsumerHead from "../../layout/EachCategoryHead/ConsumerHead";
import Footer from "../../layout/Footer";
import ClothCateContainer from "./ClothCateContainer";

function MainClothCategories() {
  return (
    <div>
      <ConsumerHead headName="ซื้อ" />
      <div className="bg-grey pb-3">
        <ClothCateContainer />
      </div>
      <Footer />
    </div>
  );
}

export default MainClothCategories;
