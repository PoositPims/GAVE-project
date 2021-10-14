import React, { useEffect, useState } from "react";
import axios from "../../config/axios";

function DeliveryStatusCardEach({ productPicture, productId, quantity }) {
  const [eachProduct, setEachProduct] = useState({});

  useEffect(() => {
    const fetchEachMustdoCard = async () => {
      try {
        const res = await axios.get(`/products/${productId}`);
        // console.log(res.data)
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
          {/* <p>
            <span className="text-primary fw-bold">วันที่สั่ง: </span>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default DeliveryStatusCardEach;
