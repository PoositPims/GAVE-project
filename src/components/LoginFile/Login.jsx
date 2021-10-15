import React from "react";
import Header2 from "../layout/Header2";
// import "./App.css";
import Footer from "../layout/Footer";
import LoginContainer from "./LoginContainer";

function Login() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header2 />
      <div
      // style={{ minHeight: "680px" }}
      >
        <LoginContainer />
      </div>
      <Footer />
    </div>
  );
}

export default Login;
