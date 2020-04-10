import './Message.css';
import React, { Component } from 'react';

interface MessageProps {
    author: string,
    content: string,
    timestamp: Date,
    color?: string // todo: custom type
}

interface MessageState {

}

export default class Message extends Component<MessageProps, MessageState> {
    render() {
        return (
            <div className='Message'>
                <p id='content'>{this.props.content}</p>
            </div>
        )
    }
}