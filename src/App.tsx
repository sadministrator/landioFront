import './App.css';
import React, { Component } from 'react';
import Chat from './components/Chat';

interface AppProps { }

interface AppState { }

class App extends Component<AppProps, AppState> {
    render() {
        return (
            <div className='App'>
                <Chat className='Chat' endpoint='localhost:5000' />
            </div>
        )
    }
}

export default App;
