import React, { Component } from 'react';
import './resultFeed.css';
import Result from '../../components/result/result';


const ResultFeed = (props) => (
  <div className='result-feed'>
    {
      props.results.map((elem, i) => (
        <div key={i}>
          <Result info={elem} />
        </div>
      ))
    }
  </div>
);

export default ResultFeed;
