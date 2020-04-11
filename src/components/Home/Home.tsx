import './Home.css';
import React, { Component } from 'react';
import UserCustomize from './UserCustomize';
import RoomSelect from './RoomSelect';
import Chat from '../Chat/Chat';
import GenerateId from '../../helpers/GenerateId';
import ColorType from '../../types/ColorType';
import RandomColor from '../../helpers/RandomColor';

interface HomeProps {

}

interface HomeState {
    room: string;
    username: string;
    userId: string;
    userColor: ColorType;
}

export default class Home extends Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);

        this.state = {
            room: 'global',
            username: '',
            userId: GenerateId.generate(),
            userColor: RandomColor.generate()
        };

        this.handleRoomChange = this.handleRoomChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
    }

    handleRoomChange = (NewRoom: string) => {
        this.setState({ room: NewRoom });
    }

    handleUsernameChange = (newUsername: string) => {
        this.setState({ username: newUsername });
    }

    handleColorChange = (newColor: ColorType) => {
        this.setState({ userColor: newColor });
    }

    render() {
        return (
            <div className='Home'>
                <UserCustomize usernameChange={this.handleUsernameChange} userColor={this.state.userColor} handleColorChange={this.handleColorChange} />
                <RoomSelect roomChange={this.handleRoomChange} />
                <Chat endpoint='localhost:5000' room={this.state.room} userId={this.state.userId} username={this.state.username} />
            </div>
        )
    }
}