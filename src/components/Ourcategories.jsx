import React from "react";
import Category from "./Category";
import "./style.css";
import Image1 from "../images/img6.jpg";
import Image2 from "../images/img2.jpg";
import Image3 from "../images/img3.jpg";
import Image4 from "../images/img4.jpg";
import Image5 from "../images/img5.jpg";
import Image6 from "../images/img6.jpg";
import Image7 from "../images/img7.jpg";
import Image8 from "../images/img3.jpg";
import Image9 from "../images/img2.jpg";

export default function Ourcategories() {
  return (
    <div>
      <h3 className='category-start'>OUR CATEGORIES</h3>

      <div className='category-header'>
        <ul>
          <li>Spaces</li>
          <li>Equipment</li>
          <li>Jobs</li>
          <li>Deals</li>
        </ul>
      </div>
      <div className='category-groups'>
        <Category name='Share My Space' location='4 location' image={Image1} />
        <Category name='Cafe' location='21 location' image={Image2} />
        <Category name='Restaurant With Bar' location='5 location' image={Image3} />
        <Category name='Restaurant Without Bar' location='4 location' image={Image4} />
        <Category name='South Indian' location='4 location' image={Image5} />
        <Category name='Food Shacks' location='4 location' image={Image6} />
        <Category name='Highway Restaurant' location='4 location' image={Image7} />
        <Category name='Houseboat' location='4 location' image={Image8} />
        <Category name='Canteen In Cinema' location='4 location' image={Image9} />
      </div>
    </div>
  );
}
