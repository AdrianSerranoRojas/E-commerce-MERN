import React from "react";
import Button from "../Button";

import "./PageFooter.scss";

function PageFooter({ children, ...props }) {
  return (
    <footer className="Footer bg-dark text-white mt-5" {...props}>
      <Button>PREVIOUS</Button>
      <Button>NEXT</Button>
    </footer>
  );
}

export default PageFooter;
