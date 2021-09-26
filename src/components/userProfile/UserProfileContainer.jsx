import React, { useState } from "react";
import UserProfileList from "./UserProfileList";
import { isEmpty } from "../services/validateService";
import { NavLink } from "react-router-dom";

function UserProfileContainer() {
  // const [name, setName] = useState("");
  const [input, setInput] = useState({
    firstName: "",
    surName: "",
    phone: "",
    email: "",
    password: "",
    confirmPass: "",
  });
  const [error, setError] = useState({
    firstName: "",
    surName: "",
    phone: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const validateName = (value) => {
    if (isEmpty(value)) {
      //{payee: 'payee is require', amount:""Amount must be numeriv}
      // วิธีที่ 1
      // const newError = { ...Error };
      // newError.payee = "Payee is required";
      // setError(newError);
      // วิธีที่ 2
      // setError((curErr) => ({ ...curErr, payee: "Payee is required" })); //งง // เพิ่มค่า key value เขาไปใน Object ตัวนั้น
      return "Name is required";
    }
    return "";
  };

  const handleInputChange = (e) => {
    if (e.target.value === "") {
      // setError("กรุณากรอกข้อมูล");
      setError((curErr) => ({
        ...curErr,
        value: validateName(e.target.value),
      }));
      // ............................แก้บรรทัดนี้................................
    } else {
      setError("");
    }
    console.log(e.target.value);
    console.log(e.target.name);
    setInput((current) => ({ ...current, [e.target.name]: e.target.value }));
  };
  // อ้างถึง key ที่เป็น object
  return (
    <>
      <div className="bg-primary">
        <p className="text-center text-white fs-4 mt-3">
          ยินดีต้อนรับเข้าสู่ GAVE
        </p>
        <div className="bg-white my-3 border rounded-3 container-60 border border-warning border-3">
          <div className="mt-3 col">
            <UserProfileList
              userProfileTitle="ชื่อจริง"
              onChange={handleInputChange}
              value={input.firstName}
              name="firstName"
              error={error}
              userInfoProfile="ปีเตอร์"
            />
            <UserProfileList
              userProfileTitle="นามสกุล"
              onChange={handleInputChange}
              value={input.surName}
              name="surName"
              error={error}
              userInfoProfile="แอมโบรสฟ"
            />
            <UserProfileList
              userProfileTitle="เบอร์โทรศัพท์"
              onChange={handleInputChange}
              value={input.phone}
              name="phone"
              error={error}
              userInfoProfile="088-xxx-xxxx"
            />
            <UserProfileList
              userProfileTitle="อีเมล"
              onChange={handleInputChange}
              value={input.email}
              name="email"
              error={error}
              userInfoProfile="peter@gmail.com"
            />
          </div>
          <div className="text-center mb-3">
            <NavLink to="/">
              <button
                type="button"
                className="btn btn-warning w-20 text-center  "
              >
                กลับสู่หน้าหลัก
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfileContainer;
