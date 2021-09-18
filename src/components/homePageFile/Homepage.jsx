// import "./App.css";
import "../../App.css";
import CategoryContainer from "../CategoryContainer";
import DailyDeal from "./daily/DailyDeal";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import WeeklyDealContainer from "../WeeklyDealContainer";

function Homepage() {
  return (
    <div className="d-flex flex-column min-vh-100 ">
      <Header />
      <div className="pb-3 pt-3 bg-secondary bg-opacity-25 ">
        <CategoryContainer />
        <WeeklyDealContainer />
        <DailyDeal />
      </div>

      <Footer />
    </div>
  );
}

export default Homepage;
