import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";



function SellerProducts() {

  const [sellerProduct,setSellerProduct] = useState({})
  

  return (
    <>
      <div className="bg-white container px-0 mt-3">
        <h4 className="fw-bold fs-4 p-3 text-primary">สินค้าทั้งหมดของฉัน</h4>
        {/*  */}

        <div className="border-bottom border-warning border-3 mb-3">
          {/* <div style={{ marginTop: "35px" }}>
            <img
              src="burger.png"
              alt=""
              style={{ width: "70px", marginLeft: "20px" }}
            />
            <p>อาหารและเครื่องดื่ม</p>
          </div> */}

          <h4 className="text-warning ">ลงขายแล้ว</h4>
          {/* <p className="fw-bold">สินค้า</p> */}

          <div className="ms-3">
            <NavLink
              to={{pathname: '/sellerEachPeoduct', state: { product: {id: 1} }}}
              className="text-decoration-none text-dark"
            >
              <img src="bottle.jpg" alt="" style={{ width: "100px" }} />
              <p className="mb-0">น้ำดื่มตราคริสตัน</p>
              <p className="mb-0">ในคลัง : 100 แพค</p>
            </NavLink>
          </div>
        </div>
        {/*  */}
        {/*  */}

        <div className="border-bottom border-warning border-3 mb-3">
          <h4 className="text-warning ">ยังไม่ลงขายแล้ว</h4>

          {/* <div>
            <img src="bottle.jpg" alt="" style={{ width: "100px" }} />
            <p className="mb-0">น้ำดื่มตราคริสตัน</p>
            <p className="mb-0">ในคลัง : 100 แพค</p>
          </div> */}
        </div>

        {/*  */}
        {/*  */}
        {/* <div className="d-flex  border-bottom border-warning border-3 mb-3">
          <div style={{ marginTop: "35px" }}>
            <img src="groceries.png" alt="" style={{ width: "70px" }} />
            <p>อุปโภค บริโภค</p>
          </div>
          <div style={{ marginTop: "35px" }}>
            <h4 className="text-center fs-3 text-warning ">0</h4>
            <p className="fw-bold">สินค้า</p>
          </div>
        </div> */}
        {/*  */}
        {/*  */}
        {/* <div className="d-flex border-bottom border-warning border-3 mb-3">
          <div style={{ marginTop: "35px" }}>
            <img src="customer-service.png" alt="" style={{ width: "70px" }} />
            <p>บริการต่าง ๆ</p>
          </div>
          <div style={{ marginTop: "35px" }}>
            <h4 className="text-center fs-3 text-warning ">0</h4>
            <p className="fw-bold">สินค้า</p>
          </div>
        </div> */}
        {/*  */}
        {/*  */}
        {/* <div className="d-flex border-bottom border-warning border-3 mb-3">
          <div style={{ marginTop: "35px" }}>
            <img src="flight.png" alt="" style={{ width: "70px" }} />
            <p>การท่องเที่ยวและประสบการณ์ต่าง ๆ</p>
          </div>
          <div style={{ marginTop: "35px" }}>
            <h4 className="text-center fs-3 text-warning ">1</h4>
            <p className="fw-bold">สินค้า</p>
          </div>
          <div style={{ marginTop: "20px", marginLeft: "50px" }}>
            <img
              src="paris.jpg"
              alt=""
              style={{ width: "170px", height: "170px" }}
            />
            <p className="mb-0">ดีลท่องเที่ยวฝั่งเศส</p>
            <p className="mb-0">ในคลัง : 10 แพคเกจ</p>
          </div>
        </div> */}
        {/*  */}
        {/*  */}
        {/* <div className="d-flex border-bottom border-warning border-3 mb-3">
          <div style={{ marginTop: "35px" }}>
            <img src="clothes-rack.png" alt="" style={{ width: "70px" }} />
            <p>เสื้อผ้าและสินค้าแฟชัน</p>
          </div>
          <div style={{ marginTop: "35px" }}>
            <h4 className="text-center fs-3 text-warning ">0</h4>
            <p className="fw-bold">สินค้า</p>
          </div>
        </div> */}
        {/*  */}
        {/* <div className="d-flex border-bottom border-warning border-3">
          <div style={{ marginTop: "35px" }}>
            <img src="multiscreen.png" alt="" style={{ width: "70px" }} />
            <p>สินค้าอิเล็กทรอนิกส์</p>
          </div>
          <div style={{ marginTop: "35px" }}>
            <h4 className="text-center fs-3 text-warning ">0</h4>
            <p className="fw-bold">สินค้า</p>
          </div>
        </div> */}
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
