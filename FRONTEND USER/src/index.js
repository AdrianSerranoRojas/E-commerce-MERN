import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import CartItemContextProvider from "./components/CartItemContextProvider/CartItemContextProvider";
import { ProductsProvider } from "./components/ProductsContextProvider/ProductsContextProvider";
import CheckoutsContextProvider from "./components/CheckoutsContextProvider/CheckoutsContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <ProductsProvider>
      <CartItemContextProvider>
        <CheckoutsContextProvider>
          <App />
        </CheckoutsContextProvider>
      </CartItemContextProvider>
    </ProductsProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
