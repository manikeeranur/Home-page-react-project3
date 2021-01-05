import React from "react";
import logo from "../images/ohtel-logo-v1 white (2).png";
export default function Navbar() {
  return (
    <div>
      <nav class='navbar navbar-expand-lg navbar-light bg-light'>
        <div class='navbar-brand' href='#'>
          <img src={logo} alt='' />
        </div>
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarTogglerDemo02'
          aria-controls='navbarTogglerDemo02'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span class='navbar-toggler-icon'></span>
        </button>

        <div class='collapse navbar-collapse' id='navbarTogglerDemo02'>
          <ul class='navbar-nav ml-auto mt-2 mt-lg-0'>
            <li>
              <input type='search' name='' id='search-bar' placeholder='Search' />
            </li>
            <li class='nav-item active text-dark'>
              <a class='nav-link' href='#'>
                Register <span class='sr-only'>(current)</span>
              </a>
            </li>
            <li class='nav-item text-dark'>
              <a class='nav-link' href='#'>
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
