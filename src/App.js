import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CategoryContainer from "./components/CategoryContainer";
import DailyDeal from "./components/homePageFile/daily/DailyDeal";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import WeeklyDealContainer from "./components/WeeklyDealContainer";
import Homepage from "./components/homePageFile/Homepage";
import Login from "./components/LoginFile/Login";
import BeginSales from "./components/letBeginSales/BeginSales";
import Purchase from "./components/purchase/Purchase";
import Payment from "./components/paymentFile/Payment";
import ContactUs from "./components/contactUsFile/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/payment" component={Payment} />
        <Route path="/beginSales" component={BeginSales} />
        <Route path="/purchase" component={Purchase} />
        <Route path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
