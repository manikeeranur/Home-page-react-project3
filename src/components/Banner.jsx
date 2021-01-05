import React, {Component} from "react";
import "./style.css";
export default class Banner extends Component {
  render() {
    return (
      <div className='bannerImage'>
        <div className='details'>
          <h1>SPACES</h1>
          <br />
          <p>Sell / Buy / Rent / Lease / Partner / Invest … In the Used Equipments in RestaurantsHotels, Cruise Ships etc.. </p>
          <br />
          <p>
            Explore More <i class='fa fa-arrow-circle-right' aria-hidden='true'></i>
          </p>
        </div>
      </div>
    );
  }
}
