import React, { useEffect, useState, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "../../config/axios";
// import { AuthContext } from "../../contexts/AuthContext";
import { SellerProductContext } from "../../contexts/sellerProductContext";
import SellerLeft from "./SellerLeft";
import SellerRight from "./SellerRight";

function SellerEachProContainer({ id, deleteProductNonActiveByid }) {
  // const { user } = useContext(AuthContext);
  // const history = useHistory();
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
  // console.log(salesProducts);

  const {
    sellerProduct,
    setSellerProduct,
    sellerProductNotActive,
    setSellerProductNotActive,
  } = useContext(SellerProductContext);

  const [edit, setEdit] = useState(false);
  const [editPrice, setEditPrice] = useState(false);
  const [editProductSize, setEditProductSize] = useState(false);
  const [editAmount, setEditAmount] = useState(false);
  const [editDelivery, setEditDelivery] = useState(false);
  // const [finishEdit, setFinishEdit] = useState(false);

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
        price: salesProducts.price,
        amount: salesProducts.amount,
        delivery: salesProducts.delivery,
      });
      setEdit(false);
      setEditPrice(false);
      setEditProductSize(false);
      setEditAmount(false);
      setEditDelivery(false);
      // setFinishEdit((c) => !c);
      // console.log(res);
      // console.log(e.target.value);
      // history.push("/");

      if (location.state.mode === "active") {
        // console.log(location.state);
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
      console.dir(err);
    }
  };

  return (
    <>
      <h3 className="fw-bold text-primary" style={{ marginLeft: "100px" }}>
        สินค้าของฉัน
      </h3>
      <div className=" d-flex bg-white container-80 justify-content-between ">
        <SellerLeft
          handleEditInfo={handleEditInfo}
          salesProducts={salesProducts}
          edit={edit}
          setEdit={setEdit}
          setsalesProducts={setsalesProducts}
        />
        <SellerRight
          // edit={edit}
          handleEditInfo={handleEditInfo}
          handleClickDelete={handleClickDelete}
          salesProducts={salesProducts}
          setsalesProducts={setsalesProducts}
          setEditPrice={setEditPrice}
          editPrice={editPrice}
          editProductSize={editProductSize}
          setEditProductSize={setEditProductSize}
          setEditAmount={setEditAmount}
          editAmount={editAmount}
          setEditDelivery={setEditDelivery}
          editDelivery={editDelivery}
        />
      </div>
    </>
  );
}

export default SellerEachProContainer;
