// import "./App.css";
import "../../App.css";
// import CategoryContainer from "../CategoryContainer";
import DailyDeal from "./daily/DailyDeal";
import Footer from "../layout/Footer";
// import Header from "../layout/Header";
// import WeeklyDealContainer from "../WeeklyDealContainer";
// import AdsCarousel from "./AdsCarousel";
import HeaderFinal from "../layout/HeaderFinal";
import axios from "../../config/axios";
import SearchProduct from "./SearchProduct";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../contexts/searchContext";
import { SellerProductContext } from "../../contexts/sellerProductContext";
import AdsCarousel from "./AdsCarousel";

function Homepage() {
  const { searchText } = useContext(SearchContext);
  const { sellerProduct, setSellerProduct } = useContext(SellerProductContext);

  // console.log(sellerProduct);

  // ......................................... เอามากจาก dailydeal
  const [productCard, setProductCard] = useState([]);
  useEffect(() => {
    const fetchProductCard = async () => {
      try {
        const res = await axios.get(`/products/allProduct`);
        // const res = await axios.get(`/products/allProduct/?isActive=true`);
        // const res = await axios.get(`/products/sold`);
        console.log(res.data);
        setProductCard(res.data.product);
        // setSellerProduct(res.data.product);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProductCard();
  }, []);
  // .........................................

  // const filterProducts = sellerProduct.filter((item) =>
  //   item.productName.toLowerCase().includes(searchText.toLowerCase())
  // );

  return (
    <div className="d-flex flex-column min-vh-100 " style={{ width: "100%" }}>
      {/* <Header /> */}
      <HeaderFinal />
      <SearchProduct />
      {/* <div style={{ width: 500 }}> */}
      <div className="pb-3 pt-3 bg-grey " style={{ minHeight: "610px" }}>
        {/* <AdsCarousel /> */}
        <DailyDeal
          // sellerProduct={filterProducts}
          productCard={productCard}
        />
        {/* </div> */}
      </div>

      <Footer />
    </div>
  );
}

export default Homepage;
