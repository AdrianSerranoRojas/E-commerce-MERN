/* eslint-disable react/prop-types */
import React from "react";
import { render as rtlRender } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

function render(ui, { initialState, ...renderOptions } = {}) {
  function Wrapper({ children }) {
    return <BrowserRouter>{children}</BrowserRouter>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}
// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
