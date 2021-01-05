import React from "react";

import "./style.css";
export default function Topdealsforyou() {
  return (
    <div>
      <h2 style={{color: "blue", margin: "50px"}}>TOP DEALS FOR YOU</h2>

      <div className='topdeals row'>
        <div className='topdeals-box1 col-9 col-lg-5 mt-3 mb-5 '>
          <div className='topdeals-image1'></div>

          <div className='topdeals-content1'>
            <p>Check Top Deals In Your City</p>
            <p>
              Explain More <i className='fa fa-arrow-circle-right' aria-hidden='true'></i>
            </p>
          </div>
        </div>
        <div className='topdeals-box2 col-9 col-lg-5 mt-3 mb-5'>
          <div className='topdeals-image2 '></div>

          <div className='topdeals-content2'>
            <p>Up to 50 % Off on Hotel Spaces </p>
            <p>
              Explain More <i className='fa fa-arrow-circle-right' aria-hidden='true'></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
