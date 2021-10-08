import { createContext, useState, useEffect, useContext } from "react";
import axios from "../config/axios";
import { AuthContext } from "../contexts/AuthContext";

const SellerContext = createContext();

function SellerProvider({ children }) {
  const { user } = useContext(AuthContext);
  const [salesInfos, setSalesInfos] = useState([]);
  console.log(salesInfos);

  useEffect(() => {
    const fetchSalesInfo = async () => {
      try {
        const res = await axios.get(`/shops/?isActive=true&shopId`);
        // console.log(res.data)
        setSalesInfos(res.data.shop);
        // console.log(res)
      } catch (err) {
        console.log(err);
      }
    };
    fetchSalesInfo();
  }, []);

  return <SellerContext.Provider>{children}</SellerContext.Provider>;
}

export { SellerContext, SellerProvider };
