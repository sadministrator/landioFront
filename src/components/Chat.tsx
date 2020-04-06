import './Chat.css';
import React, { Component } from 'react';
import SocketIOClient from 'socket.io-client';
import Input from './Input'
import MessageType from '../types/MessageType';
import MessageList from './MessageList';
import GenerateId from '../helpers/GenerateId';

interface ChatProps {
    className?: string;
    endpoint: string;
}

interface ChatState {
    messages: MessageType[];
}

export default class Chat extends Component<ChatProps, ChatState> {
    socket!: SocketIOClient.Socket;

    constructor(props: ChatProps) {
        super(props);

        this.state = {
            messages: []
        }

        this.handleEmit = this.handleEmit.bind(this);
    }

    componentDidMount() {
        this.socket = SocketIOClient(this.props.endpoint)
        this.socket.on('chat message', (message: MessageType) => {
            this.setState((state) => {
                const updatedMessages = state.messages.concat(message);
                console.log('Messages: ', updatedMessages);
                return {
                    messages: updatedMessages
                }
            });
        })
    }

    componentWillUnmount() {
        //this.socket.disconnect();
    }

    handleEmit = (message: string) => {
        this.socket.emit('chat message', {
            id: GenerateId.generate(), author: 'me', content: message, timestamp: new Date()
        });
    }

    render() {
        return (
            <div className='Chat'>
                <MessageList messages={this.state.messages} />
                <Input handleEmit={this.handleEmit}/>
            </div>
        )
    }
}