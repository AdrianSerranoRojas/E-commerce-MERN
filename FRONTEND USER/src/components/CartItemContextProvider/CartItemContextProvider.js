import React, { useReducer, useContext } from "react";

import {
  CartItemStateContext,
  CartItemDispatchContext,
} from "../../context/CartItemContext";
import { ProductsContext } from "../../context/ProductsContext";

import loadLocalStorageItems from "../../utils/loadLocalStorageItems";

const CART_ITEMS_LOCAL_STORAGE_KEY = "react-sc-state-cart-items";

export const cartItemInitialState = {
  cartItems: loadLocalStorageItems(CART_ITEMS_LOCAL_STORAGE_KEY, []),
};

export function cartItemReducer(state, action) {
  function buildNewCartItem(cartItem) {
    if (cartItem.quantity >= cartItem.unitsInStock) {
      return cartItem;
    }

    return {
      id: cartItem.id,
      title: cartItem.title,
      img: cartItem.img,
      price: cartItem.price,
      unitsInStock: cartItem.unitsInStock,
      createdAt: cartItem.createdAt,
      updatedAt: cartItem.updatedAt,
      quantity: cartItem.quantity + 1,
    };
  }

  switch (action.type) {
    case "handleRemove": {
      const updatedCart = state.cartItems.filter(
        (item) => item.id !== action.payload.productId,
      );
      return {
        ...state,
        cartItems: updatedCart,
      };
    }
    case "handleChange": {
      const { cartItems } = state;
      const { event, productId } = action.payload;
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === productId && item.quantity <= item.unitsInStock) {
          return {
            ...item,
            quantity: Number(event.target.value),
          };
        }
        return item;
      });
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }

    case "handleAddToCart": {
      const { cartItems } = state;
      const { products, productId } = action.payload;

      const prevCartItem = cartItems.find((item) => item.id === productId);
      const foundProduct = products.find((item) => item.id === productId);
      if (prevCartItem) {
        const updatedCartItems = cartItems.map((item) => {
          if (item.id !== productId) {
            return { ...item };
          }
          // if (item.quantity >= item.unitsInStock) {
          //   return item;
          // }
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        });
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }
      const updatedProduct = buildNewCartItem(foundProduct);
      return {
        ...state,
        cartItems: [...cartItems, updatedProduct],
      };
    }
    default:
      return state;
  }
}

function CartItemContextProvider({ children }) {
  const [cartItem, dispatch] = useReducer(
    cartItemReducer,
    cartItemInitialState,
  );
  const { products } = useContext(ProductsContext);

  function handleChange(event, productId) {
    dispatch({
      type: "handleChange",
      payload: {
        productId: productId,
        products: products,
        event: event,
      },
    });
  }

  function handleAddToCart(productId) {
    dispatch({
      type: "handleAddToCart",
      payload: {
        productId: productId,
        products: products,
      },
    });
  }

  function handleRemove(productId) {
    dispatch({
      type: "handleRemove",
      payload: {
        productId: productId,
      },
    });
  }

  return (
    <CartItemStateContext.Provider value={cartItem}>
      <CartItemDispatchContext.Provider
        value={{ dispatch, handleChange, handleAddToCart, handleRemove }}
      >
        {children}
      </CartItemDispatchContext.Provider>
    </CartItemStateContext.Provider>
  );
}
export default CartItemContextProvider;
