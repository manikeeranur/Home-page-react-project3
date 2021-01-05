import React from "react";
import Category from "./Category";
import Image1 from "../images/img6.jpg";
import Image2 from "../images/img2.jpg";
import Image3 from "../images/img3.jpg";
export default function Searchtoplocation() {
  return (
    <div>
      <div className='searchtop-header'>
        <h2>SEARCH BY TOP LOCATIONS</h2>
        <button>View All &gt;&gt;</button>
      </div>

      <div className='category-groups'>
        <Category name='Chennai' image={Image1} />
        <Category name='Bangalore' image={Image2} />
        <Category name='Delhi' image={Image3} />
      </div>
    </div>
  );
}
