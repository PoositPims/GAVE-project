import React from "react";
import Header2 from "../layout/Header2";
// import "./App.css";
import Footer from "../layout/Footer";
import LoginContainer from "./LoginContainer";

function Login() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header2 />
      <LoginContainer />
      <Footer />
    </div>
  );
}

export default Login;
