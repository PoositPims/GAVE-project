import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import axios from "../../config/axios";
import SellerEachProContainer from "../SellerEachProduct/SellerEachProContainer";
import SellerProductCard from "./SellerProductCard";
import { SellerProductContext } from "../../contexts/sellerProductContext";
// import { AuthContext } from "../../contexts/AuthContext";

function SellerProducts() {
  // const { user } = useContext(AuthContext);

  const {
    sellerProduct,
    setSellerProduct,
    sellerProductNotActive,
    setSellerProductNotActive,
  } = useContext(SellerProductContext);
  // console.log(sellerProduct);
  // console.log(sellerProductNotActive);

  // console.log(sellerProduct)

  // .......
  // ใช้ location ส่งข้อมูลผ่าหน้า..................................

  // const deleteProductNonActiveByid = (id) => {
  //   const idx = sellerProductNotActive.findIndex((item) => item.id === id);
  //   if (idx !== -1) {
  //     const newSellerProductNotActive = [...sellerProductNotActive];
  //     newSellerProductNotActive.splice(idx, 1);
  //     setSellerProductNotActive(newSellerProductNotActive);
  //   }
  // };

  return (
    <>
      <div className="bg-white container px-0 mt-3">
        <h4 className="fw-bold fs-4 p-3 text-primary">สินค้าทั้งหมดของฉัน</h4>
        {/*  */}

        <div className="border-bottom border-warning border-3 mb-3">
          <h4 className="text-warning ">ลงขายแล้ว</h4>
          {/* <p className="fw-bold">สินค้า</p> */}

          <div className="ms-3">
            <div className=" d-flex flex-wrap bg-white mt-2 align-items-center container justify-content-evenly ">
              {sellerProduct.map((item) => {
                return (
                  <NavLink
                    to={{
                      pathname: "/sellerEachPeoduct",
                      state: {
                        id: item.id,
                        mode: "active",
                      },
                    }}
                    className="text-decoration-none text-dark"
                  >
                    <SellerProductCard
                      key={item.id}
                      productName={item.productName}
                      productPrice={item.price}
                      productPic={item.productPicture}
                    />
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border-bottom border-warning border-3 mb-3">
          <h4 className="text-warning ">ยังไม่ลงขาย</h4>
          <div className=" d-flex flex-wrap bg-white mt-2 align-items-center container justify-content-evenly ">
            {sellerProductNotActive.map((item) => {
              return (
                <NavLink
                  to={{
                    pathname: "sellerEachPeoduct",
                    state: {
                      id: item.id,
                      mode: "inActive",
                    },
                  }}
                  className="text-decoration-none text-dark"
                >
                  <SellerProductCard
                    key={item.id}
                    productName={item.productName}
                    productPrice={item.price}
                    productPic={item.productPicture}
                    // deleteProductNonActiveByid={deleteProductNonActiveByid}
                  />
                </NavLink>
              );
            })}
          </div>
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
