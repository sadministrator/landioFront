import './RoomSelect.css'
import React, { Component } from 'react'

interface RoomSelectProps {
    roomChange: (newRoom: string) => void;
}

interface RoomSelectState {
    createRoom: string;
    joinRoom: string;
}

export default class RoomSelect extends Component<RoomSelectProps, RoomSelectState> {
    constructor(props: RoomSelectProps) {
        super(props);

        this.state = {
            createRoom: '',
            joinRoom: ''
        };

        this.handleCreateRoomChange = this.handleCreateRoomChange.bind(this);
        this.handleCreateRoomSubmit = this.handleCreateRoomSubmit.bind(this);
        this.handleJoinRoomChange = this.handleJoinRoomChange.bind(this);
        this.handleJoinRoomSubmit = this.handleJoinRoomSubmit.bind(this);
    }

    handleCreateRoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ createRoom: event.target.value });
    }

    handleCreateRoomSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        this.props.roomChange(this.state.createRoom);
        this.setState({ createRoom: '' });
        event.preventDefault();
    }

    handleJoinRoomChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ joinRoom: event.target.value });
    }

    handleJoinRoomSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        this.props.roomChange(this.state.joinRoom);
        this.setState({ joinRoom: '' });
        event.preventDefault();
    }

    render() {
        return (
            <div className='RoomSelect'>
                <div className='CreateRoom'>
                    <form id="createRoomForm" onSubmit={this.handleCreateRoomSubmit}>
                        <h1 id='createRoomTitle'>Create Room</h1>
                        <input id='createRoomInput' type='text' name='createRoom' value={this.state.createRoom} onChange={this.handleCreateRoomChange} />
                        <input id='createRoomButton' type='submit' value='Submit' />
                    </form>
                </div>

                <div className='JoinRoom'>
                    <form id="joinRoomForm" onSubmit={this.handleJoinRoomSubmit}>
                        <h1 id='joinRoomTitle'>Join Room</h1>
                        <input id='joinRoomInput' type='text' name='joinRoom' value={this.state.joinRoom} onChange={this.handleJoinRoomChange} />
                        <input id='joinRoomButton' type='submit' value='Submit' />
                    </form>
                </div>
            </div>
        )
    }
}