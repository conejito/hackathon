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
    if (event.key === 'Enter' && this.state.question != '') {
      this.props.setSearching(true);
      this.props.setQuestion(this.state.question);
      this.props.getData();
      this.refs.input.blur();
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
