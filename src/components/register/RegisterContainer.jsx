import React, { useState } from "react";
import RegisterList from "./RegisterList";
import { isEmpty } from "../services/validateService";

function RegisterContainer() {
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
          ลงทะเบียนและเป็นหนึ่งในครอบครัวของเรา
        </p>
        <div className="bg-white my-3 border rounded-3 container-60 border border-warning border-3">
          <div className="mt-3 col">
            <RegisterList
              loginTitle="ชื่อจริง"
              onChange={handleInputChange}
              value={input.firstName}
              name="firstName"
              error={error}
            />
            <RegisterList
              loginTitle="นามสกุล"
              onChange={handleInputChange}
              value={input.surName}
              name="surName"
              error={error}
            />
            <RegisterList
              loginTitle="เบอร์โทรศัพท์"
              onChange={handleInputChange}
              value={input.phone}
              name="phone"
              error={error}
            />
            <RegisterList
              loginTitle="อีเมล"
              onChange={handleInputChange}
              value={input.email}
              name="email"
              error={error}
            />
            <RegisterList
              loginTitle="รหัสผ่าน"
              onChange={handleInputChange}
              value={input.password}
              name="password"
              error={error}
            />
            <RegisterList
              loginTitle="ยืนยันรหัสผ่าน"
              onChange={handleInputChange}
              value={input.confirmPass}
              name="confirmPass"
              error={error}
            />
          </div>
          <div className="text-center mb-3">
            <button
              type="button"
              className="btn btn-warning w-20 text-center  "
            >
              sent
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterContainer;
