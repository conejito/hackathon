import React, { Component } from 'react';
import './loadingOverlay.css';
import Conejito from '../../components/conejito/conejito';

class LoadingOverlay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="loadingOverlay">
        <Conejito type="france" />
        <p>Daj mi chwilę...</p>
      </div>
    );
  }
}

export default LoadingOverlay;
