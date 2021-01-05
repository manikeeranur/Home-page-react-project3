import React, {Component} from "react";
export default class Category extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='category '>
        <div className='category-image '>
          <img src={this.props.image} alt='' width='100%' />
        </div>
        <div className='category-footer'>
          <p>{this.props.name}</p>
          <p>{this.props.location}</p>
        </div>
      </div>
    );
  }
}
