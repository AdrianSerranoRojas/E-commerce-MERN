import { createContext } from "react";
import loadLocalStorageItems from "../utils/loadLocalStorageItems";

const CART_ITEMS_LOCAL_STORAGE_KEY = "react-sc-state-cart-items";

export const CartItemStateContext = createContext(
  loadLocalStorageItems(CART_ITEMS_LOCAL_STORAGE_KEY, []),
);

export const CartItemDispatchContext = createContext(() => {

});
