import './App.css';
import React, { Component } from 'react';
import Home from './components/Home/Home';

interface AppProps { }

interface AppState { }

class App extends Component<AppProps, AppState> {
    render() {
        return (
            <div className='App'>
                <Home />
            </div>
        )
    }
}

export default App;
