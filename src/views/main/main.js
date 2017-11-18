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
    this.setQuestion = this.setQuestion.bind(this);

    this.state = {
      searching: false,
      question: ''
    };
  }

  setSearching(value=true) {
    this.setState({
      searching: value
    });
  }

  setQuestion(value) {
    this.setState({
      question: value
    });
  }

  render() {
    return (
      <div className='main'>
        {
          this.state.searching ?
            <div>
              <LoadingOverlay />
              <Logo variant='small' />
              <ChatField question=''
                         setSearching={this.setSearching}
                         setQuestion={this.setQuestion} />
            </div>
          :
            <div>
              <Conejito />
              <Logo variant='big' />
              <ChatField question=''
                         setSearching={this.setSearching}
                         setQuestion={this.setQuestion} />
              <Footer />
            </div>
        }
      </div>
    );
  }
}

export default Main;
