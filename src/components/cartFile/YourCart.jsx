import React, { useContext, useState } from "react";
import YourCartCard from "./YourCartCard";
import { CartContext } from "../../contexts/CartContext";

function YourCart({
  salesProduct,
  // : {
  //   id,
  //   productName,
  //   price,
  //   delivery,
  //   amount,
  //   productSize,
  //   productPicture,
  // },
  // countCart,
}) {
  // console.log(salesProduct);

  const {
    yourCart,
    setYourCart,
    handleClickDelete,
    yourCartProduct,
    setYourCartProduct,
  } = useContext(CartContext);
  // const { sellerProduct } = useContext(sellerProductContext);

  // console.log(yourCart);

  return (
    <>
      <div
        className="container-60 px-0 mt-3"
        // style={{ width: "700px", height: "300px" }}
      >
        <div className="bg-primary rounded">
          <h4
            className="fw-bold text-white ms-2 fs-5 ms-3 pt-2 "
            style={{ height: "40px" }}
          >
            รถเข็นของคุณ
          </h4>
        </div>
        {yourCart.map((item) => (
          <YourCartCard
            id={item.id}
            key={item.id}
            yourCart={item}
            handleClickDelete={handleClickDelete}
          />
        ))}

        {/* {salesProduct.map((item) => (
          <YourCartCard
            id={item.id}
            key={item.id}
            salesProduct={salesProduct}
            // yourCart={item}
          />
        ))} */}
      </div>
    </>
  );
}

export default YourCart;
