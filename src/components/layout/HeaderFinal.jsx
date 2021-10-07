import React, { useContext } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { removeToken } from "../services/localStorage";

function HeaderFinal({ headTitle }) {
  const { user, setUser } = useContext(AuthContext);
  // console.log(user);

  const history = useHistory();

  const handleClickLogout = (e) => {
    e.preventDefault();
    removeToken();
    setUser(null);
    if (user.role === "BUYER") {
      history.push("/login");
    } else {
      history.push("/salesLogin");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-primary pb-0">
        <div className="container-fluid text-white">
          <a
            className="navbar-brand text-white fs-3 fw-bolder ts-8 ms-5"
            href="/"
          >
            GAVE
            <span>{headTitle}</span>
          </a>

          <div className="navbar-collapse justify-content-end me-2 ">
            <ul className="navbar-nav ">
              {user ? (
                <>
                  <div className="nav-item me-1">
                    <NavLink
                      to="/"
                      className=" text-white nav-link active fs-5"
                      href="/"
                      onClick={handleClickLogout}
                    >
                      ลงชื่อออก
                    </NavLink>
                  </div>

                  {/* <div className="nav-item me-1">
                <NavLink
                  to="/"
                  className=" text-white nav-link active fs-5"
                  // href="/"
                >
                  ลงชื่อออก
                </NavLink>
              </div> */}
                </>
              ) : (
                <>
                  <div className="nav-item me-1">
                    <NavLink
                      to="/saleRegister"
                      className=" text-white nav-link active fs-5"
                      // href="/"
                    >
                      ลงทะเบียนผู้ขาย
                    </NavLink>
                  </div>
                  <div className="nav-item me-1">
                    <NavLink
                      to="/salesLogin"
                      className=" text-white nav-link active fs-5"
                      // href="/"
                    >
                      เข้าสู่ระบบผู้ขาย
                    </NavLink>
                  </div>
                  <li className="nav-item me-1">
                    <NavLink
                      to="/register"
                      className=" text-white nav-link fs-5"
                      // href="/"
                    >
                      สมัครสมาชิก
                    </NavLink>
                  </li>
                  <li className="nav-item me-1">
                    <NavLink
                      to="/login"
                      className=" text-white nav-link fs-5"
                      // href="/"
                    >
                      เข้าสู่ระบบ
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderFinal;
