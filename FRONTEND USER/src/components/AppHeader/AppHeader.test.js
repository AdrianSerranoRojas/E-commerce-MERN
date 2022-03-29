import React from "react";
import { render, screen } from "../../utils/test-utils-render";

import AppHeader from "./AppHeader";

describe("given a Cart Item", () => {
  describe("blablalba", () => {
    test("blalbalblab", () => {
      render(<AppHeader />);
      expect(screen.getByTestId("cart")).toBeInTheDocument();
    });
    test("blarytutylbalblab", () => {
      render(<AppHeader />);
      expect(screen.getByText(/navbar-nav/)).toBeInTheDocument();
    });
  });
});
