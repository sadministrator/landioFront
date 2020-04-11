import './MessageList.css';
import React, { Component } from 'react';
import Message from './Message';
import MessageType from '../../types/MessageType'

interface MessageListProps {
    messages: MessageType[]
}

interface MessageListState {

}

export default class MessageList extends Component<MessageListProps, MessageListState> {
    render() {
        return (
            <div className='MessageList'>
                {this.props.messages.map((message) => {
                    return (
                        <div key={message.messageId}>
                            <Message message={message} />
                        </div>
                    )
                })}
            </div>
        )
    }
}