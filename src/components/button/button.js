import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import './button.css';


class Button extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const cookies = new Cookies();
    cookies.set('visited', 'true', { path: '/' });
    this.props.setVisited(true);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Przejdź do aplikacji
      </button>
    );
  }
}

export default Button;
