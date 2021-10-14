import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";

function SellerRight({
  salesProducts,
  setsalesProducts,
  handleEditInfo,
  handleClickDelete,
  setEditPrice,
  editPrice,
  editAmount,
  setEditAmount,
  editProductSize,
  setEditProductSize,
  setEditDelivery,
  editDelivery,
}) {
  console.log(salesProducts);
  return (
    <div className="col ms-2">
      <div className="d-flex ">
        <h5 className="fw-bold ms-3 mt-2">รายละเอียดสินค้า</h5>
      </div>
      <div className="mt-3">
        <div className="d-flex justify-content-between mt-2">
          <p className="fw-bold text-warning">ราคา</p>
          <p>
            <span>{salesProducts?.price} </span>
            บาท
          </p>
          <div className="text-end">
            {editPrice ? (
              <>
                <input
                  className="form-control"
                  type="text"
                  onChange={(e) =>
                    setsalesProducts({
                      ...salesProducts,
                      price: e.target.value,
                    })
                  }
                />
                <button className="btn btn-warning" onClick={handleEditInfo}>
                  Save
                </button>
              </>
            ) : (
              <p
                className="text-primary mb-0"
                style={{ marginTop: "10px" }}
                onClick={() => setEditPrice(true)}
              >
                แก้ไข
              </p>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <p className="fw-bold text-warning">มีสินค้าทั้งหมด</p>
          <p>
            <span>{salesProducts.amount} </span>
            ชิ้น
          </p>
          <div className="text-end">
            {editAmount ? (
              <>
                <input
                  className="form-control"
                  type="text"
                  onChange={(e) =>
                    setsalesProducts({
                      ...salesProducts,
                      amount: e.target.value,
                    })
                  }
                />
                <button className="btn btn-warning" onClick={handleEditInfo}>
                  Save
                </button>
              </>
            ) : (
              <p
                className="text-primary mb-0"
                style={{ marginTop: "10px" }}
                onClick={() => setEditAmount(true)}
              >
                แก้ไข
              </p>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <p className="fw-bold text-warning">รายละเอียดอื่น ๆ</p>
          {salesProducts?.productSize}
          <div className="text-end">
            {editProductSize ? (
              <>
                <input
                  className="form-control"
                  type="text"
                  onChange={(e) =>
                    setsalesProducts({
                      ...salesProducts,
                      productSize: e.target.value,
                    })
                  }
                />
                <button className="btn btn-warning" onClick={handleEditInfo}>
                  Save
                </button>
              </>
            ) : (
              <p
                className="text-primary mb-0"
                style={{ marginTop: "10px" }}
                onClick={() => setEditProductSize(true)}
              >
                แก้ไข
              </p>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <p className="fw-bold text-warning">การจัดส่ง</p>
          <span>
            {salesProducts.delivery === "JandTExpress"
              ? "J & T Express"
              : salesProducts.delivery}
          </span>
          <div className="text-end">
            {editDelivery ? (
              <>
                <div class="form-group">
                  {/* <label for="exampleFormControlSelect1">Example select</label> */}
                  <select
                    class="form-control"
                    id="exampleFormControlSelect1"
                    value={salesProducts.delivery}
                    onChange={(e) =>
                      setsalesProducts({
                        ...salesProducts,
                        delivery: e.target.value,
                      })
                    }
                  >
                    <option value="ThailandPostt">Thailand Post</option>
                    <option value="FlashExpress">Flash Express</option>
                    <option value="KerryExpress">Kerry Express</option>
                    <option value="JandTExpress">J & T Express</option>
                  </select>
                </div>

                <button className="btn btn-warning" onClick={handleEditInfo}>
                  Save
                </button>
              </>
            ) : (
              <p
                className="text-primary mb-0"
                style={{ marginTop: "10px" }}
                onClick={() => setEditDelivery(true)}
              >
                แก้ไข
              </p>
            )}
          </div>
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
  );
}

export default SellerRight;
