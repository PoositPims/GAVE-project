import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "../../config/axios";
import { CartContext } from "../../contexts/CartContext";

function MainPurchase({
  salesProduct: {
    id,
    productName,
    price,
    delivery,
    amount,
    productSize,
    productPicture,
    Shop,
  },
  countCart,
}) {
  // console.log(Shop);
  const [addProduct, setAddProduct] = useState({
    productId: id,
    quantity: 0,
  });
  const [err, setErr] = useState("");
  // console.log(addProduct);

  const handleAddToCart = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/carts", {});
    } catch (err) {
      console.dir(err);
    }
  };

  const handleInputChange = (e) => {
    if (e.target.name === "quantity" && isNaN(+e.target.value)) {
      setErr("Quantity must be a number");
    } else {
      setAddProduct((curr) => ({
        ...curr,
        productId: id,
        quantity: +e.target.value,
      }));
      setErr("");
    }
  };
  const onAdd = async (addProduct) => {
    const res = await axios.post("/carts", {
      productId: id,
      shopId: Shop.id,
      quantity: addProduct.quantity,
      price,
    });
    // setAddProduct(res.data);
    console.log("res", res.data);
    // console.log(`result`, result);
  };
  return (
    <>
      <div className=" d-flex bg-white container-80 justify-content-between ">
        <div className="col">
          <p className="fs-6">
            ขายโดย {Shop?.firstName} {Shop?.lastName}
          </p>

          <img src={productPicture} alt="" width="250px" height="250px" />
          <p className="mt-2">
            มีสินค้าทั้งหมด
            <span className="px-2">{amount}</span>
            ชิ้น
          </p>
          <div className="d-flex ">
            <p className="me-3">แชร์ดีล :</p>
            <a target="_blank" href="https://www.facebook.com" className="me-2">
              <img src="facebook.png" alt="" width="25px" />
            </a>

            <a
              target="_blank"
              href="https://www.instagram.com/"
              className="me-2"
            >
              <img src="instagram.png" alt="" width="25px" />
            </a>

            <a target="_blank" href="https://twitter.com/" className="me-2">
              <img src="twitter.png" alt="" width="25px" />
            </a>

            <a target="_blank" href="https://line.me/th/" className="me-2">
              <img src="line.png" alt="" width="25px" />
            </a>
          </div>
        </div>
        <div className="col">
          <h5 className="fw-bold mt-2">{productName}</h5>
          <div className="d-flex justify-content-between ">
            <h6 className="fw-bold me-2">ราคา</h6>
            <div className="d-flex">
              <h6 className="fw-bold me-2 bg-primary text-white rounded">
                {price}
              </h6>
              <p className="ms-2">บาท</p>
            </div>
          </div>
          <div className="mt-3">
            <div className="d-flex justify-content-between mt-2">
              <p>รายละเอียดสินค้า</p>
              <p>{productSize}</p>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p>การจัดส่ง</p>
              {delivery}
            </div>

            <div className="d-flex align-items-center justify-content-between ">
              <p className="mt-2 ">จำนวน</p>
              <div className="d-flex ">
                <input
                  type="text"
                  name="quantity"
                  onChange={handleInputChange}
                  style={{ width: "100px" }}
                />
                <p className="ms-2">บาท</p>
              </div>
            </div>
            <div className="text-danger">{err && <p>{err}</p>}</div>

            <div className="text-center mt-3">
              <button
                className="btn btn-outline-primary me-2"
                onClick={() => onAdd(addProduct)}
                // onClick={() => onAdd(handleAddCart)}
                to={{ state: id }}
              >
                เพิ่มไปยังรถเข็น
              </button>
              {/* </NavLink> */}
              {/* <NavLink to="/payment">
                <button className="btn btn-warning">ซื้อสินค้า</button>
              </NavLink> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPurchase;
