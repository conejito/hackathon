import React, { Component } from 'react';
import './map.css';
import less from './less.svg';
import more from './more.svg';

class Map extends Component {
  constructor(props) {
    super(props);

    this.textExpand = "Pokaż mapę";
    this.textHide = "Ukryj mapę";

    this.state = {
      expanded: false
    }

    this.handleExpanding = this.handleExpanding.bind(this);
  }

  handleExpanding() {
    if (this.state.expanded) {

    } else {

    }

    this.setState({
      expanded: !(this.state.expanded)
    });
  }

  render() {
    return (
      <div className="map">
        <div className="button-wrapper">
          <button className='button'
                  onClick={this.handleExpanding}>
            {this.state.expanded ? this.textHide : this.textExpand}
          </button>
          <img class='icon'
               src={this.state.expanded ? less : more}
               onClick={this.handleExpanding} />
        </div>
        <div className="map-wrapper">
        </div>
      </div>
    );
  }
}

export default Map;
