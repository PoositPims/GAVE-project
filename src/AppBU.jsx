import "./App.css";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-primary pb-0">
        <div className="container-fluid text-white">
          <a
            className="navbar-brand text-white fs-1 fw-bolder ts-8 ms-2"
            href="/"
          >
            GAVE
          </a>

          <div className="navbar-collapse justify-content-end me-2 ">
            <ul className="navbar-nav ">
              <li className="nav-item me-1">
                <a className=" text-white nav-link active fs-5" href="/">
                  ขายสินค้ากับ GAVE
                </a>
              </li>
              <li className="nav-item me-1">
                <a className=" text-white nav-link fs-5" href="/">
                  การแจ้งเตือน
                </a>
              </li>
              <li className="nav-item me-1">
                <a className=" text-white nav-link fs-5" href="/">
                  สมัครสมาชิก
                </a>
              </li>
              <li className="nav-item me-1">
                <a className=" text-white nav-link fs-5" href="/">
                  เข้าสู่ระบบ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-primary pt-0 pb-3">
        <div className="row w-25 m-auto">
          <div className="container-fluid text-white input-group">
            <input
              type="text"
              className="form-control "
              placeholder="ค้นหาดีล, ดีลใกล้เคียง, สินค้า, ร้านค้า"
            />
            <button type="button" className="btn btn-warning w-20 ">
              sent
            </button>
          </div>
        </div>
      </nav>
      {/* ... */}
      {/* ... Content ... */}
      {/* <div className="bg-Secondary"> */}
      {/* <div className='d-flex flex-row bd-highlight mb-3 bg-warning justify-content-between"'> */}
      <div className="pb-3 pt-3 bg-secondary bg-opacity-25">
        <div className=" d-flex justify-content-around align-items-end bg-white py-2">
          <div className="text-center ">
            <img src="groceries.png" alt="" width="89" height="89" />
            <h5>อุปโภค บริโภค </h5>
          </div>

          <div className="text-center">
            <img src="flight.png" alt="" width="89" height="89" />
            <h5>การท่องเที่ยวและประสบการณ์ต่าง ๆ</h5>
          </div>

          <div className="text-center">
            <img src="customer-service.png" alt="" width="89" height="89" />

            <h5>บริการต่าง ๆ</h5>
          </div>

          <div className="text-center">
            <img src="burger.png" alt="" width="89" height="89" />
            <h5>อาหารและเครื่องดื่ม</h5>
          </div>

          <div className="text-center">
            <img src="flight.png" alt="" width="89" height="89" />
            <h5>การท่องเที่ยวและประสบการณ์ต่าง ๆ</h5>
          </div>

          <div className="text-center">
            <img src="clothes-rack.png" alt="" width="89" height="89" />
            <h5>เสื้อผ้าและสินค้าแฟชัน</h5>
          </div>

          <div className="text-center">
            <img src="multiscreen.png" alt="" width="89" height="89" />
            <h5>สินค้าอิเล็กทรอนิกส์</h5>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* ... */}
      <footer className="bg-primary text-white text-center py-3 fs-7">
        Copyright © 2021, GAVE Thailand All rights reserved.
      </footer>
    </div>
  );
}

export default App;
