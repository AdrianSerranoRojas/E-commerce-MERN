import React from "react";

// import "./AppHeader.scss";

function PageHeader({ ...props }) {
  return (
    <header className="bg-primary mb-4" {...props}>
      <div className="container-fluid">
        <div className="row">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/checkout/step-1">Personal Details</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Billing Address
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Payment Method
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Ovierview
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default PageHeader;

// style = "--bs-breadcrumb-divider: '>';";
