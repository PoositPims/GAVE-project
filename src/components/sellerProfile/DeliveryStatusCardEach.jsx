import React, { useEffect, useState } from "react";
import axios from "../../config/axios";

function DeliveryStatusCardEach({
  productPicture,
  productId,
  quantity,
  salesInfos,
}) {
  const [eachProduct, setEachProduct] = useState({});
  // console.log(salesInfos.id);
  // console.log(eachProduct.Shop?.id);
  // ถ้า eachProduct.id = salesInfos.id let show // if not equal dont show

  useEffect(() => {
    const fetchEachMustdoCard = async () => {
      try {
        const res = await axios.get(`/products/${productId}`);
        // console.log(res.data);
        setEachProduct(res.data.product);
        // console.log(res)
      } catch (err) {
        console.log(err);
      }
    };
    fetchEachMustdoCard();
  }, []);
  // console.log(quantity);
  // console.log(eachProduct);

  return (
    <>
      {eachProduct.Shop?.id === salesInfos.id ? (
        <div className="d-flex col ms-5 border-start border-3 border-primary">
          <div className=" d-flex container row border-top border-bottom">
            <div className="col-2">
              <img
                src={eachProduct.productPicture}
                alt=""
                style={{ width: "100px" }}
              />
            </div>
            <div className="col-8 ">
              <p>
                <span className="text-primary fw-bold">ชื่อสินค้า: </span>
                {eachProduct.productName}
              </p>
              <p>
                <span className="text-primary fw-bold">จำนวน: </span>
                {quantity}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default DeliveryStatusCardEach;
