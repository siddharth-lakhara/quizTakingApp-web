import React, { Component } from 'react';
import Headers from './components/header';
import PageSelector from './components/PageSelector';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserName: 'siddharth',
    };
  }

  render() {
    return (
      <div className="App">
        <Headers user={this.state.currentUserName} />
        <PageSelector
          user={this.state.currentUserName}
          updateUserName={(userName) => { this.setState({ currentUserName: userName }); }}
        />
      </div>);
  }
}

export default App;
