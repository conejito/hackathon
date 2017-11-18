import React, { Component } from 'react';
import './main.css';
import Logo from '../../components/logo/logo';
import Conejito from '../../components/conejito/conejito';


const Main = () => (
  <div className='main'>
    <Conejito type='bag' />
    <Logo variant='big' />
  </div>
);

export default Main;
