import React, { Component } from 'react';
import Clock from './component/Clock';
import Header from './component/Header';
import Button from '@material-ui/core/Button';
import { NavLink, Switch, Route } from 'react-router-dom';
import About from './component/About';


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
          <nav>
              <ul>
                  <li><NavLink to='/'>Home</NavLink></li>
                  <li><NavLink to='/about'>About</NavLink></li>
                  <li><NavLink to='/contact'>Contact</NavLink></li>
              </ul>
          </nav>
          <Route path="/about" component={About}/>


          <Clock/>

      </div>
    );
  }
}

export default App;
