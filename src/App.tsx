import './App.css';
import React, { Component } from 'react';
import SocketIOClient from 'socket.io-client';

const ENDPOINT = 'localhost:5000';
interface PropType {

}

interface StateType {
    response: string;
    endpoint: string;
}

class App extends Component<PropType, StateType> {
    constructor(props: PropType) {
        super(props);

        this.state = {
            response: '',
            endpoint: ENDPOINT
        }
    }

    componentDidMount() {
        const { endpoint } = this.state;
        const socket = SocketIOClient(endpoint);
        socket.on('message', (data: string) => {
            this.setState({ response: data })
        })
    }

    render() {
        const { response } = this.state;
        return (
            <div>
                {response
                    ? <h3>{response}</h3>
                    : <h3>No messages.</h3>}
            </div>
        )
    }
}

export default App;
