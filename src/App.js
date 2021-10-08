import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import CategoryContainer from "./components/CategoryContainer";
// import DailyDeal from "./components/homePageFile/daily/DailyDeal";
// import Footer from "./components/layout/Footer";
// import Header from "./components/layout/Header";
// import WeeklyDealContainer from "./components/WeeklyDealContainer";
import Homepage from "./components/homePageFile/Homepage";
import { user as initialUser } from "./components/services/localStorage";
// import Login from "./components/pages/Login";
import Login from "./components/LoginFile/Login";
import BeginSales from "./components/letBeginSales/BeginSales";
import Purchase from "./components/purchase/Purchase";
import Payment from "./components/paymentFile/Payment";
import ContactUs from "./components/contactUsFile/ContactUs";
import Cart from "./components/cartFile/Cart";
// import ConfirmBuy from "./components/confirmBuy/ConfirmBuy";
import SaleRegister from "./components/SalerRegisterFile/SaleRegister";
import SellerProfile from "./components/sellerProfile/SellerProfile";
import SellerEachPeoduct from "./components/SellerEachProduct/SellerEachPeoduct";
import Register from "./components/register/Register";
import UserProfile from "./components/userProfile/UserProfile";
import SalesLogin from "./components/salerLogin/SalesLogin";
// import CategoryConsumer from "./components/Categories/consumerGoods/CategoryConsumer";
// import MainServiceCategories from "./components/Categories/servicesGoods/MainServiceCategories";
// import MainFoodCategories from "./components/Categories/FoodAndDrink.jsx/MainFoodCategories";
// import MainClothCategories from "./components/Categories/Cloth/MainClothCategories";
import { createContext, useState, useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
// const multer = require("multer");

function App() {
  const { user, setUser } = useContext(AuthContext);
  const role = user ? user.role : "GUEST";
  return (
    // <BrowserRouter>
    //   <Switch>
    //     <Route path="/login" component={Login} />
    //     <Route path="/salesLogin" component={SalesLogin} />
    //     <Route path="/register" component={Register} />
    //     <Route path="/userProfile" component={UserProfile} />
    //     <Route path="/saleRegister" component={SaleRegister} />
    //     <Route path="/sellerEachPeoduct" component={SellerEachPeoduct} />
    //     <Route path="/sellerProfile" component={SellerProfile} />
    //     <Route path="/cart" component={Cart} />
    //     <Route path="/contactus" component={ContactUs} />
    //     <Route path="/payment" component={Payment} />
    //     <Route path="/beginSales" component={BeginSales} />
    //     <Route path="/purchase" component={Purchase} />
    //     <Route path="/" component={Homepage} />
    //   </Switch>
    // </BrowserRouter>
    // ......................................................................

    <BrowserRouter>
      <Switch>
        {role === "SHOP" ? (
          <>
            {/* <Route path="/salesLogin" component={SalesLogin} />
            <Route path="/saleRegister" component={SaleRegister} /> */}
            <Route path="/sellerEachPeoduct" component={SellerEachPeoduct} />
            <Route path="/beginSales" component={BeginSales} />
            <Route path="/sellerProfile" component={SellerProfile} />
            <Route path="/contactus" component={ContactUs} />
            <Route exact path="/" component={Homepage} />
          </>
        ) : role === "BUYER" ? (
          <>
            {/* <Route path="/login" component={Login} />
            <Route path="/register" component={Register} /> */}
            <Route path="/userProfile" component={UserProfile} />
            <Route path="/cart" component={Cart} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/purchase" component={Purchase} />
            <Route path="/payment" component={Payment} />
            <Route exact path="/" component={Homepage} />
          </>
        ) : (
          <>
            <Route path="/purchase" component={Purchase} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/salesLogin" component={SalesLogin} />
            <Route path="/saleRegister" component={SaleRegister} />
            <Route path="/contactus" component={ContactUs} />
            <Route exact path="/" component={Homepage} />
          </>
        )}
      </Switch>
    </BrowserRouter>
    // ............................................................
  );
}

export default App;

{
  /* {user === 'SHOP' ? (
            <>
               <Route path="/salesLogin" component={SalesLogin} />
<Route path="/saleRegister" component={SaleRegister} />
<Route path="/sellerEachPeoduct" component={SellerEachPeoduct} />
<Route path="/sellerProfile" component={SellerProfile} />
<Route path="/payment" component={Payment} />
Route path="/purchase" component={Purchase} />
<Route path="/contactus" component={ContactUs} />
              <Redirect to="/" />
            </>
          ) : user === 'BUYER'(
            <>
            
              <Route path="/login" component={Login}
              Route path="/register" component={Register} />
              <Route path="/userProfile" component={UserProfile} />
               <Route path="/cart" component={Cart} />
               <Route path="/contactus" component={ContactUs} />
               <Route path="/beginSales" component={BeginSales} />
              <Redirect to="/" />
            </>
          )} */
}

{
  /* {user.role === "SELLER" ? ( // ถ้า user ฒีค่าแสดงว่า login แล้ว ถึงเข้าถึงหน้า Home ได้
          // role user
            <>
              <Route exact path="/" component={Home} />
              <Redirect to="/" />{" "}
            </>
          ) : user.role === 'guest ? (
             // role guest
            <>
              <Route path="/login" component={Login} />
         
              <Route path="/register" component={Register} />
            
              <Redirect to="/login" />
            </>
          ): user.role === 'customer'} */
}
// ....................................................
{
  /* <Route
          path="/MainServiceCategories"
          component={MainServiceCategories}
        /> */
}
{
  /* <Route path="/categoryConsumer" component={CategoryConsumer} /> */
}
{
  /* <Route
          path="/mainServiceCategories"
          component={MainServiceCategories}
        /> */
}
{
  /* <Route path="/MainClothCategories" component={MainClothCategories} /> */
}
{
  /* <Route path="/MainFoodCategories" component={MainFoodCategories} /> */
}
