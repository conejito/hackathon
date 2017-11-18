import React, { Component } from 'react';
import './conejito.css';
import conejito from './conejito.png';
import conejitoBag from './conejitoBag.png';
import conejitoSad from './conejitoSad.png';


class Conejito extends Component {
  constructor(props) {
    super(props);

    this.getImage = this.getImage.bind(this);
    this.getImage();
  }

  getImage() {
    this.img = conejito;

    if (this.props.type === 'bag') {
      this.img = conejitoBag;
    } else if (this.props.type === 'sad') {
      this.img = conejitoSad;
    }
  }

  render() {
    return (
      <div className='conejito-wrapper'>
        <img src={this.img} className='conejito' />
      </div>
    );
  }
}

export default Conejito;
