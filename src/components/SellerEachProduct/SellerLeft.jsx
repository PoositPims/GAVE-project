import React from "react";
import { SellerProductContext } from "../../contexts/sellerProductContext";

function SellerLeft({
  handleEditInfo,
  salesProducts,
  setsalesProducts,
  edit,
  setEdit,
}) {
  //   const [salesProducts, setsalesProducts] = useState({
  //     id: "",
  //     productName: "",
  //     productPicture: "",
  //     price: "",
  //     discount: "",
  //     amount: "",
  //     productSize: "",
  //     delivery: "",
  //     productPicture: "",
  //   });

  //   const [edit, setEdit] = useState(false);

  //   const [edit, setEdit] = useState(false);

  return (
    <div>
      <div className=" border-end border-3 border-grey">
        <h5 className="fw-bold mt-2">{salesProducts?.productName}</h5>
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
            <p className="text-primary mb-0 me-2" onClick={() => setEdit(true)}>
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
        <p className="text-primary mb-0 me-3 text-end ">แก้ไขรูป</p>
      </div>
    </div>
  );
}

export default SellerLeft;
