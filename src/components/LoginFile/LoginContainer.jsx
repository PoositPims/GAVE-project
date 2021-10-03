import React, { useState, useContext } from "react";
import LoginList from "./LoginList";
import { isEmpty } from "../services/validateService";
import axios from "../../config/axios";
// import axios from "axios";
import jwtDecode from "jwt-decode";
import { setToken, user } from "../services/localStorage";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function LoginContainer() {
  const history = useHistory();
  // const [name, setName] = useState("");
  // const [username, setUsername] = useState("");
  const { setUser } = useContext(AuthContext);
  const [input, setInput] = useState({
    // firstName: "",
    // surName: "",
    // phone: "",
    // email: "",
    username: "",
    password: "",
    // confirmPass: "",
  });
  const [error, setError] = useState({
    // firstName: "",
    // surName: "",
    // phone: "",
    // email: "",
    username: "",
    password: "",
    // confirmPass: "",
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
        // ผิดตรง value
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

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users/login", {
        username: input.username,
        password: input.password,
      });
      console.log(res);
      setToken(res.data.token);
      setUser(jwtDecode(res.data.token));
      history.push("/");
    } catch (err) {
      console.dir(err);
      if (err.response && err.response.status === 400) {
        setError("Invalid username or password");
      }
    }
  };

  return (
    <>
      <div className="bg-primary">
        <p className="text-center text-white fs-4 mt-3">
          เข้าสู่ระบบเพื่อดีลที่โดนใจ !
        </p>
        <div
          className="bg-white my-3 border rounded-3 container-60 border border-warning border-3"
          style={{ height: "430px" }}
        >
          <form onSubmit={handleSubmitLogin}>
            <div className="mt-5 col">
              {/* <LoginList
              loginTitle="ชื่อจริง"
              onChange={handleInputChange}
              value={input.firstName}
              name="firstName"
              error={error}
            /> */}
              {/* <LoginList
              loginTitle="นามสกุล"
              onChange={handleInputChange}
              value={input.surName}
              name="surName"
              error={error}
            /> */}
              {/* <LoginList
              loginTitle="เบอร์โทรศัพท์"
              onChange={handleInputChange}
              value={input.phone}
              name="phone"
              error={error}
            /> */}
              {/* <LoginList
              loginTitle="อีเมล"
              onChange={handleInputChange}
              value={input.email}
              name="email"
              error={error}
            /> */}
              <LoginList
                loginTitle="ชื่อผู้ใช้"
                onChange={handleInputChange}
                value={input.username}
                name="username"
                error={error}
                type="text"
              />
              <LoginList
                loginTitle="รหัสผ่าน"
                onChange={handleInputChange}
                value={input.password}
                name="password"
                error={error}
                type="password"
              />
              {/* <LoginList
              loginTitle="ยืนยันรหัสผ่าน"
              onChange={handleInputChange}
              value={input.confirmPass}
              name="confirmPass"
              error={error}
            /> */}
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-warning w-20 text-center  "
              >
                เข้าสู่ระบบ
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginContainer;
