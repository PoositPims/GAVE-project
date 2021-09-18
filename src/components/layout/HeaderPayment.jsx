import React from "react";

function HeaderPayment() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-primary pb-0 ">
        <div className="container-fluid text-white">
          <a
            className="navbar-brand text-white fs-4 fw-bolder ts-8 ms-5"
            href="/"
          >
            GAVE
            <span> ชำระเงิน</span>
          </a>

          <div className="navbar-collapse justify-content-end me-2 ">
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
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderPayment;
