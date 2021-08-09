import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    // <nav>
    //     <ul>
    //         <li> <NavLink to="./"> Home  </NavLink></li>
    //         <li> <NavLink to="./about"> About </Link></li>
    //         <li> <NavLink to="./login"> Login </Link></li>
    //     </ul>
    // </nav>

    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="./">
          UseContext
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink activeClassName="active" exact className="nav-link" aria-current="page" to="./">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" exact className="nav-link" to="./about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" exact className="nav-link" to="./login">
                  Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
