import './Message.css';
import React, { Component } from 'react';
import MessageType from '../../types/MessageType';

interface MessageProps {
    message: MessageType;
}

interface MessageState {

}

export default class Message extends Component<MessageProps, MessageState> {
    render() {
        return (
            <div className='Message'>
                <p id='content'>{this.props.message.content}</p>
            </div>
        )
    }
}