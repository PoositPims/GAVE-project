import React from "react";
import ConsumerHead from "../../layout/EachCategoryHead/ConsumerHead";
import Footer from "../../layout/Footer";
import ServiceCateContainer from "./ServiceCateContainer";

function MainServiceCategories() {
  return (
    <div>
      <ConsumerHead headName="ซื้อ" />
      <div className="bg-grey pb-3">
        <ServiceCateContainer />
      </div>
      <Footer />
    </div>
  );
}

export default MainServiceCategories;
