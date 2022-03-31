import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";

import AuthContext from "../../context/AuthContext";
import Button from "../Button/Button";
import { signOut } from "../../firebase/firebase";
import "./AppHeader.scss";

function AppHeader({ ...props }) {
  const currentUser = useContext(AuthContext);

  async function handleSignOut() {
    await signOut();
  }

  return (
    <header className="bg-primary mb-4" {...props}>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand navbar-dark">
            <NavLink
              exact
              activeClassName="active"
              className="navbar-brand"
              to="/"
            >
              Home
            </NavLink>

            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active"
                  className="nav-link"
                  to="/new-product"
                >
                  New Product
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav w-100">
                {currentUser ? (
                  <>
                    <li className="nav-item ms-auto">
                      <Link className="nav-link" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Button variant="outlined" onClick={handleSignOut}>
                        Sign Out
                      </Button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item ms-auto">
                      <Link className="nav-link" to="/sign-up">
                        Sign Up
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
