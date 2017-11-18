import React, { Component } from 'react';
import './main.css';
import Logo from '../../components/logo/logo';
import Conejito from '../../components/conejito/conejito';
import ChatField from '../../components/chatField/chatField';
import Footer from '../../components/footer/footer';


const Main = () => (
  <div className='main'>
    <Conejito type='bag' />
    <Logo variant='big' />
    <ChatField />
    <Footer />
  </div>
);

export default Main;
