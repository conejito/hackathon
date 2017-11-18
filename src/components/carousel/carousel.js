import React, { Component } from 'react';
import './carousel.css';
import Slider from 'react-slick';

class Carousel extends Component {
  render() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='carousel'>
    <Slider {...settings}>
      <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3></div>
    </Slider>
    </div>
  );
}
}

export default Carousel;
