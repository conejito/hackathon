import React, { Component } from 'react';
import './chatField.css';
import mic from './mic.svg';


class ChatField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: this.props.question
    };

    this.handleMic = this.handleMic.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
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
    }
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
                 onChange={this.handleInput}
                 onKeyPress={this.handleKeyPress} />
          <img src={mic} className='icon' onClick={this.handleMic} />
        </div>
        <div className='line' />
      </div>
    );
  }
}

export default ChatField;
