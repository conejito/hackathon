import React, { Component } from 'react';
import './landing.css';
import Button from '../../components/button/button';


const Landing = (props) => (
  <div>
    Landing
    <Button setVisited={props.setVisited} />
  </div>
);

export default Landing;
