import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-primary pb-0">
        <div className="container-fluid text-white">
          <a
            className="navbar-brand text-white fs-3 fw-bolder ts-8 ms-5"
            href="/"
          >
            GAVE
          </a>

          <div className="navbar-collapse justify-content-end me-2 ">
            <ul className="navbar-nav ">
              <div className="nav-item me-1">
                <NavLink
                  to="/saleRegister"
                  className=" text-white nav-link active fs-5"
                  href="/"
                >
                  ขายสินค้ากับ GAVE
                </NavLink>
              </div>
              <li className="nav-item me-1">
                <a className=" text-white nav-link fs-5" href="/">
                  การแจ้งเตือน
                </a>
              </li>

              <li className="nav-item me-1">
                <NavLink
                  to="/register"
                  className=" text-white nav-link fs-5"
                  href="/"
                >
                  สมัครสมาชิก
                </NavLink>
              </li>
              <li className="nav-item me-1">
                <NavLink
                  to="/login"
                  className=" text-white nav-link fs-5"
                  href="/"
                >
                  เข้าสู่ระบบ
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-primary pt-0 pb-3">
        <div className="row w-25 m-auto">
          <div className="container-fluid text-white input-group ">
            <input
              type="text"
              className="form-control"
              placeholder="ค้นหาดีล, ดีลใกล้เคียง, สินค้า, ร้านค้า"
            />
            <button type="button" className="btn btn-warning  ">
              sent
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
