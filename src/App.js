import React, { Component } from 'react';
import Clock from './component/Clock';
import Header from './component/Header';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <div className="img-with-item">
              <img src={require("./img/welcome.jpg")} alt="Snow" />
                  {/*<div className="bottom-left">Bottom Left</div>
                  <div className="top-left">Top Left</div>
                  <div className="top-right">Top Right</div>
                  <div className="bottom-right">Bottom Right</div>*/}
                  <div className="centered">
                  </div>
          </div>
        <Clock/>
      </div>
    );
  }
}

export default App;
