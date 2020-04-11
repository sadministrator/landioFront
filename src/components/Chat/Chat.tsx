import './Chat.css';
import React, { Component } from 'react';
import SocketIOClient from 'socket.io-client';
import Input from './Input'
import MessageType from '../../types/MessageType';
import MessageList from './MessageList';
import GenerateId from '../../helpers/GenerateId';

interface ChatProps {
    className?: string;
    endpoint: string;
    room: string;
    userId: string;
    username: string;
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

        //this.socket = SocketIOClient(this.props.endpoint);

        this.handleEmit = this.handleEmit.bind(this);
    }

    componentDidMount() {
        this.socket = SocketIOClient(this.props.endpoint);
        this.socket.on('chat message', (message: MessageType) => {
            this.setState((state) => {
                const updatedMessages = state.messages.concat(message);
                return {
                    messages: updatedMessages
                }
            });
        });
        this.handleEmit('Joining global.', 'join room');
    }

    componentDidUpdate(prevProps: ChatProps) {
        if(prevProps.room != this.props.room) {
            alert('room change: ' + this.props.room)
            this.handleEmit('Joining ' + this.props.room, 'join room');
        }
    }

    componentWillUnmount() {
        //this.socket.disconnect();
    }

    handleEmit = (message: string, emitType = 'chat message') => {
        const chatMessage: MessageType = {
            room: this.props.room,
            messageId: GenerateId.generate(),
            userId: this.props.userId,
            username: this.props.username,
            content: message,
            timestamp: new Date()
        }

        this.socket.emit(emitType, chatMessage);
    }

    render() {
        return (
            <div className='Chat'>
                <MessageList messages={this.state.messages} />
                <Input handleEmit={this.handleEmit} />
            </div>
        )
    }
}