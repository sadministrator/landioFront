import './UserCustomize.css';
import React, { Component } from 'react';
import { TwitterPicker } from 'react-color';
import ColorType from '../../types/ColorType';
import RandomColor from '../../helpers/RandomColor';

interface UserCustomizeProps {
    usernameChange: (newUsername: string) => void;
    handleColorChange: (newColor: ColorType) => void;
    userColor: ColorType;
}

interface UserCustomizeState {
    username: string;
}

export default class UserCustomize extends Component<UserCustomizeProps, UserCustomizeState> {
    constructor(props: UserCustomizeProps) {
        super(props);

        this.state = {
            username: ''
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleUsernameSubmit = this.handleUsernameSubmit.bind(this);
    }

    handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ username: event.target.value });
    }

    handleUsernameSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        this.props.usernameChange(this.state.username);
        this.setState({ username: '' });
        event.preventDefault();
    }

    render() {
        return (
            <div className='UserCustomize'>
                <div className='Username'>
                    <form id='usernameForm' onSubmit={this.handleUsernameSubmit}>
                        <h1 id='usernameTitle'>Username</h1>
                        <input id='usernameInput' type='text' name='username' value={this.state.username} onChange={this.handleUsernameChange} />
                        <input id='usernameButton' type='submit' value='Submit' />
                    </form>
                </div>

                <div className='Color'>
                    <div id='userSwatch' style={{ backgroundColor: this.props.userColor.hex }}></div>
                    <TwitterPicker color={this.props.userColor.hex} onChangeComplete={this.props.handleColorChange} colors={RandomColor.colorsHex()} />
                </div>
            </div>
        )
    }
}
