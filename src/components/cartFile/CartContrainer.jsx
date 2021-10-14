import React, { useContext, useEffect, useState } from "react";
import CartPayment from "./CartPayment";
import DeliverPlace from "./DeliverPlace";
// import RecomMoreCart from "./RecomMoreCart";
import YourCart from "./YourCart";
import { NavLink, useLocation } from "react-router-dom";
import axios from "../../config/axios";
import { CartContext } from "../../contexts/CartContext";

function CartContrainer() {
  const location = useLocation();

  const { onAdd, handleClickDelete } = useContext(CartContext);

  const [salesProduct, setSalesProduct] = useState({
    id: "",
    productName: "",
    productPicture: "",
    price: "",
    discount: "",
    amount: "",
    productSize: "",
    delivery: "",
    productPicture: "",
  });

  // useEffect(() => {
  //   // console.log("fetch");
  //   const fetchSalesProduct = async () => {
  //     try {
  //       const res = await axios.get(`/products/${location.state.id}`);
  //       setSalesProduct(res.data.product);
  //       // console.log(res);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchSalesProduct();
  // }, []);
  // console.log(salesProduct);

  // let itemPrices = salesProduct.amount.reduce((a, c) => a + c.price * c.qty, 0);
  // let total = itemPrices;

  return (
    <div>
      <DeliverPlace />
      <h4 className="text-start fw-bold ms-5 fs-5 mt-3">
        คุณมีสินค้าอยู่ในรถเข็น 1 รายการ
      </h4>
      <div className="d-flex">
        <YourCart
          salesProduct={salesProduct}
          handleClickDelete={handleClickDelete}
        />
        <CartPayment salesProduct={salesProduct} onAdd={onAdd} />
      </div>
    </div>
  );
}

export default CartContrainer;
