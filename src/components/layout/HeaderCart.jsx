import React from "react";

function HeaderCart() {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-primary pb-0 "> */}
      <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-white pb-0 border-bottom border-warning border-3">
        <div className="container-fluid text-white">
          <a className="navbar-brand fs-2 fw-bolder ts-8 ms-5 " href="/">
            <span className="text-primary fs-3"> GAVE |</span>
            <span className="fs-3"> รถเข็น</span>
          </a>

          {/* <div className="navbar-collapse justify-content-end me-2 ">
            <ul className="navbar-nav ">
              <li className="nav-item me-1">
                <a className=" text-white nav-link active fs-6" href="/">
                  ขายสินค้ากับ GAVE
                </a>
              </li>
              <li className="nav-item me-1">
                <a className=" text-white nav-link fs-6" href="/">
                  การแจ้งเตือน
                </a>
              </li>
              <li className="nav-item me-1">
                <a className=" text-white nav-link fs-6" href="/">
                  สมัครสมาชิก
                </a>
              </li>
              <li className="nav-item me-1">
                <a className=" text-white nav-link fs-6" href="/">
                  เข้าสู่ระบบ
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>
    </div>
  );
}

export default HeaderCart;
