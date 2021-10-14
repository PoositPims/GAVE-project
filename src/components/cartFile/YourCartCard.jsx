import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SellerProductContext } from "../../contexts/sellerProductContext";

function YourCartCard({
  yourCart,
  yourCartProduct,
  handleClickDelete,
  // yourCart: { productPicture, price, productName },
  // salesProduct: {
  //   productName,
  //   price,
  //   delivery,
  //   amount,
  //   productSize,
  //   productPicture,
  // },
}) {
  const { sellerProduct } = useContext(SellerProductContext);
  // console.log(sellerProduct);
  // console.log(yourCart);
  // console.log(yourCartProduct);
  // console.log(yourCart.id);

  return (
    <div className="bg-white">
      <div className="d-flex justify-content-between mt-3">
        <div className="d-flex">
          {/* <input type="checkbox" className="form-check-input ms-3" /> */}
          <h4 className="fw-bold fs-5 ms-2 mb-0">{yourCart.productName}</h4>
        </div>
        <div>
          <div className="me-3">
            <p className="my-0 fw-bold">THB {yourCart.price}</p>
          </div>
          <div className="me-3">
            {/* <p className="my-0 fw-bold mt-2">จำนวน {yourCart.amount} ชิ้น</p> */}
            <p className="my-0 fw-bold mt-2">จำนวน {yourCart.quantity} ชิ้น</p>
          </div>
        </div>
      </div>
      <div className="d-flex ms-5">
        <img
          src={yourCart.productPicture}
          // src={yourCartProduct.productPicture}
          alt="crystal"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
      <div className="d-flex justify-content-between justify-content-end">
        <p className="fs-6 mb-0 mt-3 text-white">ขายโดย ร้านสงขลาค้าส่ง</p>

        <button
          className="btn btn-danger btn-sm fs-6 mb-0 mt-3"
          onClick={() => handleClickDelete(yourCart.id)}
        >
          ลบออก
        </button>
      </div>
    </div>
  );
}

export default YourCartCard;
