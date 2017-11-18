import React, { Component } from 'react';
import './chatField.css';
import mic from './mic.svg';
import {ApiAiClient} from "api-ai-javascript";

class ChatField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: this.props.question
    };

    this.handleMic = this.handleMic.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.setSearching(true);
      this.props.setQuestion(this.state.question);

      const client = new ApiAiClient({accessToken: '868aa2de69c344f08e483fb6c59c6dea'})
        .textRequest( this.state.question )
        .then((response) => { console.log(response); })
        .catch((error) => { console.log(error); })
    }
  }

  handleFocus() {
    this.refs.input.select();
  }

  handleMic() {

  }

  render() {
    return (
      <div className='chat-field'>
        <div className='input-wrapper'>
          <input className='input'
                 placeholder="Masz jakieś pytanie?"
                 type="text"
                 name="question"
                 value={this.state.question}
                 onChange={this.handleInput}
                 onKeyPress={this.handleKeyPress}
                 onFocus={this.handleFocus}
                 ref='input' />
          <img src={mic} className='icon' onClick={this.handleMic} />
        </div>
        <div className='line' />
      </div>
    );
  }
}

export default ChatField;
