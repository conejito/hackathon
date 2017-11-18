import React, { Component } from 'react';
import './main.css';
import Logo from '../../components/logo/logo';
import Conejito from '../../components/conejito/conejito';
import ChatField from '../../components/chatField/chatField';
import LoadingOverlay from '../../components/loadingOverlay/loadingOverlay';
import Footer from '../../components/footer/footer';


class Main extends Component {
  constructor(props) {
    super(props);
    this.setSearching = this.setSearching.bind(this);

    this.state = {
      searching: false
    };
  }

  setSearching(value=true) {
    this.setState({
      searching: value
    });
  }

  render() {
    return (
      <div className='main'>
        {
          this.state.searching ?
            <LoadingOverlay />
          :
            <div>
              <Conejito />
              <Logo variant='big' />
              <ChatField setSearching={this.setSearching} />
              <Footer />
            </div>
        }
      </div>
    );
  }
}

export default Main;
