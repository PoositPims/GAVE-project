import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import axios from "../../config/axios";
import SellerProductCard from "./SellerProductCard";
// import { AuthContext } from "../../contexts/AuthContext";

function SellerProducts() {
  // const { user } = useContext(AuthContext);
  const [sellerProduct, setSellerProduct] = useState([]);
  const [sellerProductNotActive, setSellerProductNotActive] = useState([]);
  // console.log(sellerProduct)
  useEffect(() => {
    const fetchSalesProduct = async () => {
      try {
        const resActive = await axios.get(`/products`);
        const resNotAvtive = await axios.get(`/products/?isActive=false`);
        // console.log(res.data)
        setSellerProduct(resActive.data.product);
        setSellerProductNotActive(resNotAvtive.data.product);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSalesProduct();
  }, []);
  // ใช้ location ส่งข้อมูลผ่าหน้า..................................

  return (
    <>
      <div className="bg-white container px-0 mt-3">
        <h4 className="fw-bold fs-4 p-3 text-primary">สินค้าทั้งหมดของฉัน</h4>
        {/*  */}

        <div className="border-bottom border-warning border-3 mb-3">
          <h4 className="text-warning ">ลงขายแล้ว</h4>
          {/* <p className="fw-bold">สินค้า</p> */}

          <div className="ms-3">
            <div className=" d-flex bg-white mt-2 align-items-center container justify-content-evenly ">
              {sellerProduct.map((item) => {
                return (
                  <NavLink
                    to={{
                      pathname: "/sellerEachPeoduct",
                      state: { id: item.id },
                    }}
                    className="text-decoration-none text-dark"
                  >
                    <SellerProductCard
                      key={item.id}
                      productName={item.productName}
                      productPrice={item.price}
                    />
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border-bottom border-warning border-3 mb-3">
          <h4 className="text-warning ">ยังไม่ลงขาย</h4>
          {sellerProductNotActive.map((item) => {
            return (
              <NavLink
                to={{ pathname: "sellerEachPeoduct", state: { id: item.id } }}
                className="text-decoration-none text-dark"
              >
                <SellerProductCard
                  key={item.id}
                  productName={item.productName}
                  productPrice={item.price}
                />
              </NavLink>
            );
          })}
          {/* <div>
            <img src="bottle.jpg" alt="" style={{ width: "100px" }} />
            <p className="mb-0">น้ำดื่มตราคริสตัน</p>
            <p className="mb-0">ในคลัง : 100 แพค</p>
          </div> */}
        </div>

        <div className="text-end mt-3">
          <NavLink to="/beginSales">
            <button className="btn btn-primary me-3">ลงสินค้าเพิ่ม</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default SellerProducts;
