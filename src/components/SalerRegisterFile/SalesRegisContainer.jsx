import React, { useState } from "react";
import axios from "../../config/axios";

function SalesRegisContainer() {
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    shopName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    shopAddress: "",
  });

  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    shopName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    shopAddress: "",
  });

  const handleSubmitRegister = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("/shops/shopRegister", {
        firstName: input.firstName,
        lastName: input.lastName,
        shopName: input.shopName,
        userName: input.userName,
        email: input.email,
        password: input.password,
        confirmPassword: input.confirmPassword,
        shopAddress: input.shopAddress,
      });
      console.log(res);
    } catch (err) {
      console.dir(err);
      if (err.response && err.response.status === 400)
        if (
          err.message === "Validation error: Validation isEmail on email failed"
        ) {
          setError(err.resposne.data.message);
        }
    }
  };
  const handleInputChange = (e) => {
    if (e.target.value === "") {
      // setError("กรุณากรอกข้อมูล");
      setError((curErr) => ({
        ...curErr,
        // value: validateName(e.target.value),
      }));
      // ............................แก้บรรทัดนี้................................
    } else {
      setError("");
    }

    setInput((current) => ({ ...current, [e.target.name]: e.target.value }));
  };
  return (
    <div>
      <h3 className="fw-bold text-primary text-center">
        เริ่มต้นตอนนี้ เพื่อขายสินค้าของคุณ
      </h3>
      <div className="d-flex text-center mt-4">
        <div className="container">
          <h3 className="fw-bold">ลงทะเบียนสำหรับร้านค้า</h3>
          {/* <div className=" text-center"> */}
          <form onSubmit={handleSubmitRegister}>
            <input
              type="text"
              className="form-control mt-2 "
              placeholder="ชื่อจริง"
              onChange={handleInputChange}
              placeholder="ชื่อจริง"
              name="firstName"
              id="firstName"
              style={{ width: "400px" }}
            />
            <input
              type="text"
              className="form-control mt-2 "
              onChange={handleInputChange}
              placeholder="นามสกุล"
              name="lastName"
              id="lastName"
              style={{ width: "400px" }}
            />
            <input
              type="text"
              className="form-control mt-2 "
              onChange={handleInputChange}
              placeholder="ชื่อร้านค้า"
              name="shopName"
              id="shopName"
              style={{ width: "400px" }}
            />
            <input
              type="text"
              className="form-control mt-2 "
              onChange={handleInputChange}
              placeholder="ชื่อผู้ใช้ร้านค้า"
              name="userName"
              id="userName"
              style={{ width: "400px" }}
            />
            <input
              type="text"
              className="form-control mt-2 "
              onChange={handleInputChange}
              placeholder="อีเมล"
              name="email"
              id="email"
              style={{ width: "400px" }}
            />
            <input
              type="password"
              className="form-control mt-2 "
              onChange={handleInputChange}
              placeholder="รหัสผ่าน"
              name="password"
              id="password"
              style={{ width: "400px" }}
            />
            <input
              type="password"
              className="form-control mt-2 "
              onChange={handleInputChange}
              placeholder="ยืนยันรหัสผ่าน"
              name="confirmPassword"
              id="confirmPassword"
              style={{ width: "400px" }}
            />
            {/* </div> */}
            <input
              type="text"
              className="form-control mt-2"
              onChange={handleInputChange}
              placeholder="ที่อยู่ร้านค้า"
              name="shopAddress"
              id="shopAddress"
              style={{ width: "400px" }}
            />
            <div className="text-center mt-2">
              <button type="submit" className="btn btn-warning ">
                ลงทะเบียน
              </button>
            </div>
          </form>
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
