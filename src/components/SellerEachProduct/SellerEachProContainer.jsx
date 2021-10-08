import React, { useEffect, useState, useContext } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import axios from "../../config/axios";
import { AuthContext } from "../../contexts/AuthContext";
import { SellerProductContext } from "../../contexts/sellerProductContext";

function SellerEachProContainer({ id, deleteProductNonActiveByid }) {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  const location = useLocation();
  const [salesProducts, setsalesProducts] = useState({
    id: "",
    productName: "",
    productPicture: "",
    price: "",
    discount: "",
    amount: "",
    productSize: "",
    delivery: "",
    productPicture: "",
  });

  const {
    sellerProduct,
    setSellerProduct,
    sellerProductNotActive,
    setSellerProductNotActive,
  } = useContext(SellerProductContext);

  const [edit, setEdit] = useState(false);
  const [finishEdit, setFinishEdit] = useState(false);

  // console.log(salesProducts.id);

  useEffect(() => {
    const fetchsalesProducts = async () => {
      try {
        const res = await axios.get(`/products/${location.state.id}`);
        setsalesProducts(res.data.product);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchsalesProducts();
  }, []);
  console.log(finishEdit);

  const handleClickDelete = async () => {
    try {
      await axios.delete(`/products/${salesProducts.id}`);
      // deleteProductNonActiveByid(salesProducts.id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  const handleEditInfo = async (e) => {
    try {
      const res = await axios.put(`/products/${salesProducts.id}`, {
        productName: salesProducts.productName,
        productPicture: salesProducts.productPicture,
        productSize: salesProducts.productSize,
        price: salesProducts.productSize,
        // discount,
        // amount,
        // delivery,
        // isActive,
      });
      setEdit(false);
      // setFinishEdit((c) => !c);
      console.log(res);
      console.log(e.target.value);
      // history.push("/");

      if (location.state.mode === "active") {
        console.log(location.state);
        const newsalesProducts = [...sellerProduct];
        const idx = newsalesProducts.findIndex((item) => item.id === id);
        if (idx !== -1) {
          const updateItem = res.data.product;
          newsalesProducts[idx] = {
            ...updateItem,
          };
          location.state.setSellerProduct(newsalesProducts);
        }
      } else {
        console.log(sellerProductNotActive);
        const newsalesProducts = [...sellerProductNotActive];
        const idx = newsalesProducts.findIndex((item) => item.id === id);
        if (idx !== -1) {
          const updateItem = res.data.product;
          newsalesProducts[idx] = {
            ...updateItem,
          };
          setSellerProductNotActive(newsalesProducts);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h3 className="fw-bold text-primary" style={{ marginLeft: "100px" }}>
        สินค้าของฉัน
      </h3>
      <div className=" d-flex bg-white container-80 justify-content-between ">
        <div className=" border-end border-3 border-grey">
          <h5 className="fw-bold mt-2">
            {/* น้ำดื่มตราคริสตัน 1.5 ล. แพ็ค 6 ขวด ราคาพิเศษ */}
            {salesProducts?.productName}
          </h5>
          <div className="text-end">
            {edit ? (
              <>
                <input
                  className="form-control"
                  type="text"
                  onChange={(e) =>
                    setsalesProducts({
                      ...salesProducts,
                      productName: e.target.value,
                    })
                  }
                />
                <button className="btn btn-warning" onClick={handleEditInfo}>
                  Save
                </button>
              </>
            ) : (
              <p
                className="text-primary mb-0 me-2"
                onClick={() => setEdit(true)}
              >
                แก้ไขชื่อ
              </p>
            )}
          </div>
          <img
            src={salesProducts.productPicture}
            alt=""
            width="250px"
            height="250px"
          />
          {/* {salesProducts?.productPicture} */}
          <p className="text-primary mb-0 me-3 text-end ">แก้ไขรูป</p>
        </div>
        <div className="col ms-2">
          <div className="d-flex ">
            <h5 className="fw-bold ms-3 mt-2">รายละเอียดสินค้า</h5>
          </div>
          <div className="mt-3">
            <div className="d-flex justify-content-between mt-2">
              <p className="fw-bold text-warning">ราคา</p>
              <p>
                <span>{salesProducts.price} </span>
                บาท
              </p>
              {/* ........................................ */}
              <div className="text-end">
                {edit ? (
                  <>
                    <input
                      className="form-control"
                      type="text"
                      onChange={(e) =>
                        setsalesProducts({
                          ...salesProducts,
                          productName: e.target.value,
                        })
                      }
                    />
                    <button
                      className="btn btn-warning"
                      onClick={handleEditInfo}
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <p
                    className="text-primary mb-0"
                    style={{ marginTop: "10px" }}
                  >
                    แก้ไข
                  </p>
                )}
              </div>
              {/* ........................................ */}
              {/* <p className="text-primary mb-0" style={{ marginTop: "10px" }}>
                แก้ไข
              </p> */}
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p className="fw-bold text-warning">ส่วนลด</p>
              <p>
                <span>{salesProducts.discount}</span>
              </p>
              <p className="text-primary mb-0" style={{ marginTop: "10px" }}>
                แก้ไข
              </p>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p className="fw-bold text-warning">มีสินค้าทั้งหมด</p>
              <p>
                <span>{salesProducts.amount} </span>
                ชิ้น
              </p>
              <p className="text-primary mb-0" style={{ marginTop: "10px" }}>
                แก้ไข
              </p>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p className="fw-bold text-warning">ขนาด</p>
              {/* <p>1.5 ลิตร แพ๊ค 6 ขวด (จำนวน 10 ลิตร)</p> */}
              {salesProducts?.productSize}
              <p className="text-primary mb-0" style={{ marginTop: "10px" }}>
                แก้ไข
              </p>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <p className="fw-bold text-warning">การจัดส่ง</p>
              {/* <p>Thailand Post</p> */}
              <span>{salesProducts.delivery}</span>
              <p className="text-primary mb-0" style={{ marginTop: "10px" }}>
                แก้ไข
              </p>
            </div>
            <div className="text-center mt-3">
              <NavLink to="sellerProfile">
                <button
                  className="btn btn-outline-danger me-2"
                  onClick={handleClickDelete}
                >
                  ลบสินค้า
                </button>
              </NavLink>
              <button className="btn btn-outline-primary me-2">
                ยืนยันแต่ยังไม่ขาย
              </button>
              <NavLink to="sellerProfile">
                <button className="btn btn-warning">ยืนยันและลงขาย</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerEachProContainer;
