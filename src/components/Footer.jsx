import React from "react";

export default function Footer() {
  return (
    <div className='footer-page'>
      <p>&copy; Copyright 2020 | All rights reserved | Ohtel | Disclaimer | Privacy Policy |Terms &amp; Conditions</p>
      <div className='followus'>
        <p>Follow Us On</p>
        <ul className='socialMedia'>
          <li>
            <a href='#'>
              <i class='fa fa-behance' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i class='fa fa-google' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i class='fa fa-linkedin' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i class='fa fa-facebook' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i class='fa fa-instagram' aria-hidden='true'></i>
            </a>
          </li>
          <li>
            <a href='#'>
              <i class='fa fa-twitter' aria-hidden='true'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
