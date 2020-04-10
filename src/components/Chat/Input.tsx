import './Input.css';
import React, { Component } from 'react';

interface InputProps {
    className?: string;
    handleEmit: (message: string) => void;
}

interface InputState {
    value: string
}

export default class Input extends Component<InputProps, InputState> {
    constructor(props: InputProps) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        this.props.handleEmit(this.state.value);
        this.setState({ value: '' });
        event.preventDefault();
    }

    render() {
        return (
            <form className="Input" onSubmit={this.handleSubmit}>
                <input id='chatInput' type='text' name='message' value={this.state.value} onChange={this.handleChange} />
                <input id='chatButton' type='submit' value='Submit' />
            </form>
        )
    }
}