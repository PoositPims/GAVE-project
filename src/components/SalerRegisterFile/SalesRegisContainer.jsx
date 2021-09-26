import React from "react";

function SalesRegisContainer() {
  return (
    <div>
      <h3 className="fw-bold text-primary text-center">
        เริ่มต้นตอนนี้ เพื่อขายสินค้าของคุณ
      </h3>
      <div className="d-flex text-center mt-4">
        <div className="container">
          <h3 className="fw-bold">ลงทะเบียนร้านค้า</h3>
          <div className=" text-center">
            <input
              type="text"
              className="form-control mt-2 "
              placeholder="ชื่อร้านค้า"
              name="shopName"
              id="shopName"
              style={{ width: "400px" }}
            />
          </div>
          <input
            type="text"
            className="form-control mt-2"
            placeholder="ที่อยู่"
            name="shopAddress"
            id="shopAddress"
            style={{ width: "400px" }}
          />
          {/* <input
            type="text"
            className="form-control mt-2"
            placeholder="ที่อยู่2"
            name="shopAddress2"
            id="shopAddress2"
            style={{ width: "400px" }}
          /> */}
          {/* <select
            className="form-select form-select-sm mb-3 mt-2"
            style={{ width: "400px" }}
          >
            <option selected>ประเภทของร้านค้า</option>
            <option value="1">อุปโภคบริโภค</option>
            <option value="2">บริการต่าง ๆ</option>
            <option value="3">อาหารและเครื่องดื่ม</option>
            <option value="4">การท่องเที่ยวและประสบการณ์ต่าง ๆ</option>
            <option value="5">เสื้อผ้าและสินค้าแฟชัน</option>
            <option value="6">สินค้าอิเล็กทรอนิกส์</option>
          </select> */}
          {/* <div className="d-flex mt-2">
            <input
              type="text"
              className="form-control"
              placeholder="ชื่อ"
              name=""
              id=""
              style={{ width: "200px" }}
            />

            <input
              type="text"
              className="form-control"
              placeholder="นามสกุล"
              name=""
              id=""
              style={{ width: "200px" }}
            />
          </div> */}
          {/* <input
            type="text"
            className="form-control mt-2"
            placeholder="อีเมล"
            name="ownerEmail"
            id="ownerEmail"
            style={{ width: "400px" }}
          />
          <input
            type="text"
            className="form-control mt-2"
            placeholder="เบอร์โทรศัพท์"
            name="ownerTelephoneNumber"
            id="ownerTelephoneNumber"
            style={{ width: "400px" }}
          /> */}
          <div className="text-center mt-2">
            <button className="btn btn-warning ">ลงทะเบียน</button>
          </div>
        </div>
        {/*  */}
        <div className="container">
          <img
            src="online-shopping-pic.jpg"
            alt=""
            style={{ width: "600px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default SalesRegisContainer;
