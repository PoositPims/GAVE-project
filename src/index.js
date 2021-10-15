import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { AuthContextProvider } from "./contexts/AuthContext";
import { SearchProvider } from "./contexts/searchContext";
import { SellerProductProvider } from "./contexts/sellerProductContext";
import { OrderProvider } from "./contexts/OrderContext";
import { CartProvider } from "./contexts/CartContext";
// import { SellerProvider } from "./contexts/sellerContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchProvider>
        <SellerProductProvider>
          <OrderProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </OrderProvider>
        </SellerProductProvider>
      </SearchProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
