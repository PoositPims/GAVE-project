import React from "react";
import { NavLink } from "react-router-dom";

function Header2() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-white pb-0">
        <div className="container-fluid text-white">
          <a className="navbar-brand fs-2 fw-bolder ts-8 ms-5 " href="/">
            <span className="text-primary"> GAVE</span>
            <span> ลงชื่อเข้าใช้</span>
          </a>

          <div className="navbar-collapse justify-content-end me-2 ">
            <ul className="navbar-nav ">
              <li className="nav-item me-1">
                <NavLink
                  to="/contactus"
                  className=" text-primary nav-link active fs-4"
                  href="/"
                >
                  ต้องการความช่วยเหลือ ?
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header2;
