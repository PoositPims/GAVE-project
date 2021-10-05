import React, { useState } from "react";
import RegisterList from "./RegisterList";
import { isEmpty } from "../services/validateService";
// import axios from "axios";
import axios from "../../config/axios";
import { useHistory } from "react-router-dom";

function RegisterContainer() {
  const history = useHistory();
  // const [name, setName] = useState("");
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    telephone: "",
    password: "",
    address1: "",
    address2: "",
  });
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    telephone: "",
    password: "",
    address1: "",
    address2: "",
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

    setInput((current) => ({ ...current, [e.target.name]: e.target.value }));
  };
  // อ้างถึง key ที่เป็น object

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    axios
      // /users/register
      .post("/users/register", {
        // username: input.username,
        // password: input.password,
        // email: input.email,
        // confirmPassword: input.confirmPassword,

        firstName: input.firstName,
        lastName: input.lastName,
        username: input.username,
        email: input.email,
        telephone: input.telephone,
        password: input.password,
        address1: input.address1,
        address2: "",
    
      })

      .then(() => {
        // history.push("/");
        history.push({
          pathname: "/login",
          state: {
            successMessage:
              "your account has been created. Please login to continue",
          },
        });
      })
      .catch((err) => {
        console.dir(err);
        if (err.response && err.response.status === 400)
          if (
            err.message ===
            "Validation error: Validation isEmail on email failed"
          ) {
            setError(err.resposne.data.message);
          }
      });
  };
  return (
    <>
      <div className="bg-primary">
        <p className="text-center text-white fs-4 mt-3">
          ลงทะเบียนและเป็นหนึ่งในครอบครัวของเรา
        </p>
        <div className="bg-white my-3 border rounded-3 container-60 border border-warning border-3">
          <form onSubmit={handleSubmitRegister}>
            <div className="mt-3 col">
              <RegisterList
                registerTitle="ชื่อจริง"
                onChange={handleInputChange}
                value={input.firstName}
                name="firstName"
                error={error}
                type="text"
              />
              <RegisterList
                registerTitle="นามสกุล"
                onChange={handleInputChange}
                value={input.lastName}
                name="lastName"
                error={error}
                type="text"
              />
              <RegisterList
                registerTitle="เบอร์โทรศัพท์"
                onChange={handleInputChange}
                value={input.telephone}
                name="telephone"
                error={error}
                type="text"
              />
              <RegisterList
                registerTitle="อีเมล"
                onChange={handleInputChange}
                value={input.email}
                name="email"
                error={error}
                type="text"
              />
              <RegisterList
                registerTitle="ชื่อผู้ใช้"
                onChange={handleInputChange}
                value={input.username}
                name="username"
                error={error}
                type="text"
              />
              <RegisterList
                registerTitle="รหัสผ่าน"
                onChange={handleInputChange}
                value={input.password}
                name="password"
                error={error}
                type="password"
              />
              <RegisterList
                registerTitle="ยืนยันรหัสผ่าน"
                onChange={handleInputChange}
                value={input.confirmPass}
                name="confirmPass"
                error={error}
                type="password"
              />
            </div>
            <div className="text-center mb-3">
              <button
                type="submit"
                className="btn btn-warning w-20 text-center  "
              >
                sent
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterContainer;
