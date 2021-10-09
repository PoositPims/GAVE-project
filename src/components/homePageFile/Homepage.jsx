// import "./App.css";
import "../../App.css";
// import CategoryContainer from "../CategoryContainer";
import DailyDeal from "./daily/DailyDeal";
import Footer from "../layout/Footer";
// import Header from "../layout/Header";
// import WeeklyDealContainer from "../WeeklyDealContainer";
// import AdsCarousel from "./AdsCarousel";
import HeaderFinal from "../layout/HeaderFinal";
import SearchProduct from "./SearchProduct";
import { useContext } from "react";
import { SearchContext } from "../../contexts/searchContext";
import { SellerProductContext } from "../../contexts/sellerProductContext";

function Homepage() {
  const { searchText } = useContext(SearchContext);
  const { sellerProduct } = useContext(SellerProductContext);
  console.log(sellerProduct);

  const filterProducts = sellerProduct.filter((item) =>
    item.productName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="d-flex flex-column min-vh-100 " style={{ width: "100%" }}>
      {/* <Header /> */}
      <HeaderFinal />
      <SearchProduct />
      {/* <div style={{ width: 500 }}> */}
      <div className="pb-3 pt-3 bg-grey ">
        <DailyDeal sellerProduct={filterProducts} />
        {/* </div> */}
      </div>

      <Footer />
    </div>
  );
}

export default Homepage;
