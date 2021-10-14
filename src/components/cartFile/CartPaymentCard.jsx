import React from "react";

function CartPaymentCard({ yourCart, total }) {
  // console.log("yourCart", yourCart.productId);
  // console.log(total);
  return (
    <div>
      <div className="d-flex justify-content-between container mt-3">
        <p className="fw-bold">ราคา</p>
        <p className="fw-bold">
          {/* THB {yourCart.price} x จำนวน {yourCart.amount} ชิ้น */}
          THB {yourCart.price} x จำนวน {yourCart.quantity} ชิ้น
          {/* `${yourCart.price}*{yourCart.amount}` */}
        </p>
      </div>
      {/* <p className="fw-bold">THB {total}</p> */}

      {/* <div className="d-flex justify-content-between container  mt-3">
        <p className="fw-bold">ยอดรวมทั้งสิ้น</p>
        <div>
          <p className="my-0 fw-bold">THB {yourCart.price}</p>
        </div>
      </div> */}

      {/* {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-5">{item.name}</div>
          <div className="col-3">
            <button
              className="btn btn-sm btn-outline-secondary me-1"
              onClick={() => onAdd(item)}
            >
              +
            </button>
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={() => onRemove(item)}
            >
              -
            </button>
          </div>
          <div className="col text-end">
            {item.qty} x ${item.price}
          </div>
        </div>
      ))} */}
    </div>
  );
}

export default CartPaymentCard;
