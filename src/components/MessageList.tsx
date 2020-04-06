import './MessageList.css';
import React, { Component } from 'react';
import Message from './Message';
import MessageType from '../types/MessageType'

interface MessageListProps {
    messages: MessageType[]
}

interface MessageListState {

}

export default class MessageList extends Component<MessageListProps, MessageListState> {
    render() {
        return (
            <ul className='MessageList'>
                {this.props.messages.map((message) => {
                    return (
                        <li key={message.id}>
                            <Message author={message.author} content={message.content} timestamp={message.timestamp} />
                        </li>
                    )
                })}
            </ul>
        )
    }
}