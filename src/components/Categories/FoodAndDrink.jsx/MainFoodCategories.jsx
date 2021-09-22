import React from "react";
import ConsumerHead from "../../layout/EachCategoryHead/ConsumerHead";
import Footer from "../../layout/Footer";
import FoodCateContainer from "./FoodCateContainer";

function MainFoodCategories() {
  return (
    <div>
      <ConsumerHead headName="ซื้อ" />
      <div className="bg-grey pb-3">
        <FoodCateContainer />
      </div>
      <Footer />
    </div>
  );
}

export default MainFoodCategories;
