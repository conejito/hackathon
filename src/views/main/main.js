import React, { Component } from 'react';
import './main.css';
import Logo from '../../components/logo/logo';
import Conejito from '../../components/conejito/conejito';
import ChatField from '../../components/chatField/chatField';
// import LandingOverlay from '../../components/loadingOverlay/landingOverlay';
import Footer from '../../components/footer/footer';


const Main = () => (
  <div className='main'>
    <Conejito type='beer' />
    <Logo variant='big' />
    <ChatField />
    <Footer />
  </div>
);

export default Main;
