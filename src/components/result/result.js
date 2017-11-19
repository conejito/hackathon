import React, { Component } from 'react';
import './result.css';
import less from './less.svg';
import more from './more.svg';
import restaurant from './restaurant.svg';
import Conejito from '../../components/conejito/conejito';


const Result = (props) => (
  <div>
    {
      props.info.type === 'answer'
      ?
        <div className="answer">
          <Conejito />
          <p>{props.info.data.response}</p>
        </div>
      :
        <div className="result">
          <p>{props.info.data.name}</p>
          <p>{props.info.data.rating}</p>
          <p>{props.info.data.address}</p>
        </div>
    }
  </div>
);

export default Result;
