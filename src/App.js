import React, { Component } from 'react';
import Clock from './component/Clock';
import Header from './component/Header';
import NavigationIcon from '@material-ui/icons/Navigation';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import red from '@material-ui/core/colors/red';


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
                      <Button variant="extendedFab" aria-label="Delete" className="button">
                          НАШИ РОБОТЫ
                      </Button>
                      <Button variant="extendedFab" aria-label="Delete" className="button">
                          НАНИМАЙТЕ НАС, ЧТОБЫ ПОМОЧЬ
                      </Button>
                      <Button variant="extendedFab" aria-label="Delete" className="button">
                          ЗАКАЖИТЕ ОДИН ИЗ НАШИХ ПАКЕТОВ
                      </Button>
                  </div>
          </div>
        <Clock/>
      </div>
    );
  }
}

export default App;
