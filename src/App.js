import React, { Component } from 'react';
import Header from './component/Header';
import Clock from './component/Clock';

class App extends Component {
  render() {
    return (
      <div>
          <Header name="header" />
        <Clock/>
      </div>
    );
  }
}

export default App;
