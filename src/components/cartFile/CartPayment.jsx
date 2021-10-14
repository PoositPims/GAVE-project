import React, { useContext, useEffect, useState } from "react";
import axios from "../../config/axios";
import CartPaymentCard from "./CartPaymentCard";
import { CartContext } from "../../contexts/CartContext";
import { SellerProductContext } from "../../contexts/sellerProductContext";
import { NavLink, useLocation } from "react-router-dom";
import { getNodeText } from "@testing-library/dom";

// import { SellerProductContext } from "../../contexts/sellerProductContext";

function CartPayment() {
  const { yourCart, setYourCartt, cartId, userId, setUserId } =
    useContext(CartContext);
  // const { sellerProduct, setSellerProduct } = useContext(SellerProductContext);
  console.log(yourCart);
  // yourCart.forEach((item) => console.log(item.id));

  let totalPrice = yourCart.reduce((a, c) => a + +c.price * c.quantity, 0);
  let total = totalPrice;
  // console.log(totalPrice);

  const handleChilkPay = async (e) => {
    e.preventDefault();
    const res = await axios.post("/payments/request-payment", {
      cartId: cartId,
      userId: userId,
    });
    window.location.assign(res.data.ChillpayData.PaymentUrl);
    // console.log(res.data.ChillpayData.PaymentUrl);
    // console.log(res.data);
    try {
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <>
      <div
        className="bg-white container-60 px-0 mt-3"
        // style={{ width: "400px" }}
      >
        <div className="bg-primary rounded">
          <h4
            className="fw-bold text-white ms-2 fs-5 ms-3 pt-2 "
            style={{ height: "40px" }}
          >
            ชำระเงิน
          </h4>
        </div>
        {yourCart.map((item) => (
          <CartPaymentCard
            id={item.id}
            key={item.id}
            yourCart={item}
            total={total}
          />
        ))}
        <p className="fw-bold text-center fs-5">ยอดรวม {total} บาท</p>

        <div className="text-center">
          {/* <NavLink to="/payment"> */}
          <button
            className="btn btn-warning mt-3"
            type="submit"
            onClick={handleChilkPay}
          >
            ดำเนินการชำระเงิน
          </button>
          {/* </NavLink> */}
        </div>
      </div>
    </>
  );
}

export default CartPayment;
