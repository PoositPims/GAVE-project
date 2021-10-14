import { useState, createContext, useEffect, useContext } from "react";
import axios from "../config/axios";
import { AuthContext } from "../contexts/AuthContext";
const OrderContext = createContext();

function OrderProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [sellerMustdos, setSellerMustdos] = useState([]);
  // console.log(sellerMustdos);

  // useEffect(() => {
  //   const fetchSalesMustdo = async () => {
  //     try {
  //       const res = await axios.get(`/orders/${user.id}`);
  //       console.log(res.data);
  //       setSellerMustdos(res.data.order);
  //       console.log(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchSalesMustdo();
  // }, []);
  return (
    <>
      <OrderContext.Provider value={{ sellerMustdos, setSellerMustdos }}>
        {children}
      </OrderContext.Provider>
    </>
  );
}

export { OrderProvider, OrderContext };
