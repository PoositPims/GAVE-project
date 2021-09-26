import React from "react";
import Footer from "../layout/Footer";

import HeaderRegister from "../layout/HeaderRegister";
import RegisterContainer from "./RegisterContainer";

function Register() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <HeaderRegister />
        <RegisterContainer />
        <Footer />
      </div>
    </>
  );
}

export default Register;
