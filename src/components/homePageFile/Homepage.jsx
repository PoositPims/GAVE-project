// import "./App.css";
import "../../App.css";
import CategoryContainer from "../CategoryContainer";
import DailyDeal from "./daily/DailyDeal";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import WeeklyDealContainer from "../WeeklyDealContainer";
import AdsCarousel from "./AdsCarousel";
import HeaderFinal from "../layout/HeaderFinal";
import SearchProduct from "./SearchProduct";

function Homepage() {
  return (
    <div className="d-flex flex-column min-vh-100 ">
      {/* <Header /> */}
      <HeaderFinal/>
      <SearchProduct/>
      <div className="pb-3 pt-3 bg-grey  ">
        {/* <CategoryContainer /> */}
        {/* <WeeklyDealContainer /> */}
        <DailyDeal />
      </div>

      <Footer />
    </div>
  );
}

export default Homepage;
