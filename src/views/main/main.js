import React, { Component } from 'react';
import './main.css';
import Logo from '../../components/logo/logo';
import Conejito from '../../components/conejito/conejito';
import ChatField from '../../components/chatField/chatField';
import LoadingOverlay from '../../components/loadingOverlay/loadingOverlay';
import Footer from '../../components/footer/footer';
import ResultFeed from '../../components/resultFeed/resultFeed';


class Main extends Component {
  constructor(props) {
    super(props);
    this.setSearching = this.setSearching.bind(this);
    this.setQuestion = this.setQuestion.bind(this);
    this.getData = this.getData.bind(this);

    this.state = {
      searching: false,
      question: '',
      results: []
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

  getData() {
     /*
     Tu się trzeba wjebać i przetworzyć do takiej formy
     Dodatkowo ważna jest dla mnie kolejność - najpierw answer, potem result
     */

    const newResults = [
      {
        type: 'answer',
        data: {
          response: 'Już kicam po odpowiedź!'
        }
      },
      {
        type: 'result',
        data: {
          name: "Fat Bob Burger",
          rating: 4.4,
          address: "Kramarska 21, 61-765 Poznań",
          coords: {
            lat: 21.31231,
            long: 36.231331
          }
        }
      }
    ];

    const resultsCombined = [...newResults, ...this.state.results];
    this.setState({
      results: resultsCombined
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
                         setQuestion={this.setQuestion}
                         getData={this.getData} />
              <ResultFeed results={this.state.results} />
            </div>
          :
            <div>
              <Conejito />
              <Logo variant='big' />
              <ChatField question=''
                         setSearching={this.setSearching}
                         setQuestion={this.setQuestion}
                         getData={this.getData} />
              <Footer />
            </div>
        }
      </div>
    );
  }
}

export default Main;
