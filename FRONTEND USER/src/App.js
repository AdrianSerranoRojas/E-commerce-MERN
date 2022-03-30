import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";

import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import Login from "./pages/Login/Login";
// import * as api from "./api";

import { CartItemStateContext } from "./context/CartItemContext";
import { ProductsContext } from "./context/ProductsContext";
import { CheckoutsContext } from "./context/CheckoutsContext";

import PersonalDetailsForm from "./components/PersonalDetailsForm";
import BillingAddressForm from "./components/BillingAddressForm";
import PaymentDetailsForm from "./components/PaymentDetailsForm";
import { auth } from "./firebase/firebase";

// const PRODUCTS_LOCAL_STORAGE_KEY = "react-sc-state-products";
const CART_ITEMS_LOCAL_STORAGE_KEY = "react-sc-state-cart-items";
const CHECKOUTS_LOCAL_STORAGE_KEY = "react-sc-state-checkouts";

function App() {
  const { products } = useContext(ProductsContext);
  const { cartItems } = useContext(CartItemStateContext);
  const { checkouts } = useContext(CheckoutsContext);

  // useLocalStorage(products, PRODUCTS_LOCAL_STORAGE_KEY);
  useLocalStorage(cartItems, CART_ITEMS_LOCAL_STORAGE_KEY);
  useLocalStorage(checkouts, CHECKOUTS_LOCAL_STORAGE_KEY);

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [loadingError, setLoadingError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  // const productsList = api.getProducts();
  // console.log(productsList);
  // setProducts(api.getProducts());
  console.log(products);

  useEffect(async () => {
    // if (products.length === 0) {
      setIsLoading(false);
      setHasError(false);
      setLoadingError(null);

      let unsubscribeFromAuth = null;

    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      if (unsubscribeFromAuth) {
        unsubscribeFromAuth();
      }
    };
      // getProductsDb();

      // try{
      //   console.log(api.getProducts());
      //   setProducts(api.getProducts().data.data);
      // }catch(error){
      //   setIsLoading(false);
      //   setHasError(true);
      //   setLoadingError(error.message);
      // }

    //   api
    //     .getProducts()
    //     .then((data) => {
    //       setProducts(data.data);
    //       console.log(products);
    //       setIsLoading(false);
    //     })
    //     .catch((error) => {
    //       setIsLoading(false);
    //       setHasError(true);
    //       setLoadingError(error.message);
    //     });
      }
  , [products, currentUser]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/new-product">
          <NewProduct />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/" exact>
          <Home
            fullWidth
            isLoading={isLoading}
            hasError={hasError}
            loadingError={loadingError}
          />
        </Route>
        <Route path="/Checkout/step-1">
          <CheckoutPage>
            <PersonalDetailsForm />
          </CheckoutPage>
        </Route>
        <Route path="/Checkout/step-2">
          <CheckoutPage>
            <BillingAddressForm />
          </CheckoutPage>
        </Route>
        <Route path="/Checkout/step-3">
          <CheckoutPage>
            <PaymentDetailsForm />
          </CheckoutPage>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
