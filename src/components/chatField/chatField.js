import React, { Component } from 'react';
import './chatField.css';
import mic from './mic.svg';


class ChatField extends Component {
  constructor(props) {
    super(props);

    this.handleMic = this.handleMic.bind(this);
  }

  handleMic() {

  }

  render() {
    return (
      <div className='chat-field'>
        <div className='input-wrapper'>
          <input className='input' placeholder="Masz jakieś pytanie?" />
          <img src={mic} className='icon' onClick={this.handleMic} />
        </div>
        <div className='line' />
      </div>
    );
  }
}

export default ChatField;
