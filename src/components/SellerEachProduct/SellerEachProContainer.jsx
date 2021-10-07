import React, { useEffect, useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import axios from "../../config/axios";
import { AuthContext } from "../../contexts/AuthContext";

function SellerEachProContainer({ id, deleteProductNonActiveByid }) {
  const { user } = useContext(AuthContext);
  const location = useLocation();
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

  console.log(salesProduct.id);

  useEffect(() => {
    const fetchSalesProduct = async () => {
      try {
        const res = await axios.get(`/products/${location.state.id}`);
        setSalesProduct(res.data.product);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSalesProduct();
  }, []);

  const handleClickDelete = async () => {
    try {
      await axios.delete(`/products/${salesProduct.id}`);
      // deleteProductNonActiveByid(salesProduct.id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h3 className="fw-bold text-primary" style={{ marginLeft: "100px" }}>
        สินค้าของฉัน
      </h3>
      <div className=" d-flex bg-white container-80 justify-content-between ">
        <div className=" border-end border-3 border-grey">
          <h5 className="fw-bold mt-2">
            {/* น้ำดื่มตราคริสตัน 1.5 ล. แพ็ค 6 ขวด ราคาพิเศษ */}
            {salesProduct?.productName}
          </h5>
          <div className="text-end">
            <p className="text-primary mb-0 me-2">แก้ไขชื่อ</p>
          </div>
          <img src="bottle.jpg" alt="" width="250px" height="250px" />
          {salesProduct?.productPicture}
          {/* <div className="d-flex">
            <img src="bottle2.jpg" alt="" width="100px" height="100px" />
            <img src="bottle2.jpg" alt="" width="100px" height="100px" />
          </div> */}
          <p className="text-primary mb-0 me-3 text-end ">แก้ไขรูป</p>
        </div>
        <div className="col ms-2">
          <div className="d-flex ">
            <h5 className="fw-bold ms-3 mt-2">รายละเอียดสินค้า</h5>
          </div>
          <div className="mt-3">
            <div className="d-flex justify-content-between mt-2">
              <p className="fw-bold text-warning">ราคา</p>
              <p>
                <span>{salesProduct.price} </span>
                บาท
              </p>
              <p className="text-primary mb-0" style={{ marginTop: "10px" }}>
                แก้ไข
              </p>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p className="fw-bold text-warning">ส่วนลด</p>
              <p>
                <span>{salesProduct.discount}</span>
              </p>
              <p className="text-primary mb-0" style={{ marginTop: "10px" }}>
                แก้ไข
              </p>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p className="fw-bold text-warning">มีสินค้าทั้งหมด</p>
              <p>
                <span>{salesProduct.amount} </span>
                ชิ้น
              </p>
              <p className="text-primary mb-0" style={{ marginTop: "10px" }}>
                แก้ไข
              </p>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p className="fw-bold text-warning">ขนาด</p>
              {/* <p>1.5 ลิตร แพ๊ค 6 ขวด (จำนวน 10 ลิตร)</p> */}
              {salesProduct?.productSize}
              <p className="text-primary mb-0" style={{ marginTop: "10px" }}>
                แก้ไข
              </p>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p className="fw-bold text-warning">การจัดส่ง</p>
              {/* <p>Thailand Post</p> */}
              <span>{salesProduct.delivery}</span>
              <p className="text-primary mb-0" style={{ marginTop: "10px" }}>
                แก้ไข
              </p>
            </div>
            <div className="text-center mt-3">
              <NavLink to="sellerProfile">
                <button
                  className="btn btn-outline-danger me-2"
                  onClick={handleClickDelete}
                >
                  ลบสินค้า
                </button>
              </NavLink>
              <button className="btn btn-outline-primary me-2">
                ยืนยันแต่ยังไม่ขาย
              </button>
              <NavLink to="sellerProfile">
                <button className="btn btn-warning">ยืนยันและลงขาย</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerEachProContainer;
