import React, { useState } from "react";
import LoginList from "./LoginList";
import { isEmpty } from "../services/validateService";

function LoginContainer() {
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
      // ............................แก้บรรทัดนี้
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
        <p className="text-center text-white fs-4">
          เข้าสู่ระบบเพื่อดีลที่โดนใจ !
        </p>
        <div className="d-flex justify-content-evenly bg-white my-3 border rounded-3 container">
          <div className="mt-3 col">
            <LoginList
              loginTitle="ชื่อจริง"
              onChange={handleInputChange}
              value={input.firstName}
              name="firstName"
              error={error}
            />
            <LoginList
              loginTitle="นามสกุล"
              onChange={handleInputChange}
              value={input.surName}
              name="surName"
              error={error}
            />
            <LoginList
              loginTitle="เบอร์โทรศัพท์"
              onChange={handleInputChange}
              value={input.phone}
              name="phone"
              error={error}
            />
            <LoginList
              loginTitle="อีเมล"
              onChange={handleInputChange}
              value={input.email}
              name="email"
              error={error}
            />
            <LoginList
              loginTitle="รหัสผ่าน"
              onChange={handleInputChange}
              value={input.password}
              name="password"
              error={error}
            />
            <LoginList
              loginTitle="ยืนยันรหัสผ่าน"
              onChange={handleInputChange}
              value={input.confirmPass}
              name="confirmPass"
              error={error}
            />
          </div>
          <div className="mt-3 col text-center ">
            <p className="fs-3">หรือเข้าสู่ระบบโดย :</p>
            <img src="loginFacebook.png" alt="" width="300" />
            <img src="loginGoogle.jpg" alt="" width="300" />
          </div>
        </div>
        <button type="button" className="btn btn-warning w-20 text-center  ">
          sent
        </button>
      </div>
    </>
  );
}

export default LoginContainer;
