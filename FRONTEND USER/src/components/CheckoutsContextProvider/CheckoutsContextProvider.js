import React, { useReducer } from "react";

import { CheckoutsContext } from "../../context/CheckoutsContext";

import loadLocalStorageItems from "../../utils/loadLocalStorageItems";

const CHECKOUTS_LOCAL_STORAGE_KEY = "react-sc-state-checkouts";

export const CheckoutsInitialState = loadLocalStorageItems(
  CHECKOUTS_LOCAL_STORAGE_KEY,
  {
    step1: {},
    step2: {},
    step3: {},
  },
);

export function checkoutReducer(state, action) {
  switch (action.type) {
    case "handleAddToCheckouts1": {
      const { newCheckout } = action.payload;
      return {
        step1: { ...newCheckout },
        step2: state.step2,
        step3: state.step3,
      };
    }
    case "handleAddToCheckouts2": {
      const { addCheckout } = action.payload;
      return {
        step1: state.step1,
        step2: { ...addCheckout },
        step3: state.step3,
      };
    }
    case "handleAddToCheckouts3": {
      const { addCheckout } = action.payload;
      return {
        step1: state.step1,
        step2: state.step2,
        step3: { ...addCheckout },
      };
    }
    default:
      return state;
  }
}

function CheckoutsContextProvider({ children }) {
  const [checkouts, dispatch] = useReducer(
    checkoutReducer,
    CheckoutsInitialState,
  );

  function saveCheckoutTemp1(newCheckout) {
    dispatch({
      type: "handleAddToCheckouts1",
      payload: {
        newCheckout,
      },
    });
  }
  function saveCheckoutTemp2(addCheckout) {
    dispatch({
      type: "handleAddToCheckouts2",
      payload: {
        addCheckout,
      },
    });
  }
  function saveCheckoutTemp3(addCheckout) {
    dispatch({
      type: "handleAddToCheckouts3",
      payload: {
        addCheckout,
      },
    });
  }

  return (
    <CheckoutsContext.Provider
      value={{
        checkouts,
        dispatch,
        saveCheckoutTemp1,
        saveCheckoutTemp2,
        saveCheckoutTemp3,
      }}
    >
      {children}
    </CheckoutsContext.Provider>
  );
}
export default CheckoutsContextProvider;
