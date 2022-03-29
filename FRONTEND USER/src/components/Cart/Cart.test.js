import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import Cart from "./Cart";

describe("given a Cart Item", () => {
  describe("blablalba", () => {
    test("blalbalblab", () => {
      render(<Cart cartItems={[]} />);
      expect(screen.getByTestId("cart")).toBeInTheDocument();
    });
  });
});
