import React from "react";
import ConsumerHead from "../../layout/EachCategoryHead/ConsumerHead";
import Footer from "../../layout/Footer";
import CateConsumerContainer from "./CateConsumerContainer";

function CategoryConsumer() {
  return (
    <div>
      <ConsumerHead headName="ซื้อ" />
      <div className="bg-grey pb-3">
        <CateConsumerContainer />
      </div>
      <Footer />
    </div>
  );
}

export default CategoryConsumer;
