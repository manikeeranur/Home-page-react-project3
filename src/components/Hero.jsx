import React, {Component} from "react";
import Navbar from "./Navbar";
import "./style.css";
export class Hero extends Component {
  render() {
    return (
      <div className='bannerImage'>
        <Navbar />
        <div className='details'>
          <h2>SPACES</h2>
          <p>Sell / Buy / Rent / Lease / Partner / Invest …</p>
          <p>In the Used Equipments in RestaurantsHotels, Cruise Ships etc.. </p>

          <p>
            Explore More <i className='fa fa-arrow-circle-right' aria-hidden='true'></i>
          </p>
        </div>
      </div>
    );
  }
}

export default Hero;
