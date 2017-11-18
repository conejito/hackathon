import React, { Component } from 'react';
import './chatField.css';
import mic from './mic.svg';


class ChatField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
    };

    this.handleMic = this.handleMic.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
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
                 value={this.state.username}
                 onChange={this.handleInput} />
          <img src={mic} className='icon' onClick={this.handleMic} />
        </div>
        <div className='line' />
      </div>
    );
  }
}

export default ChatField;
