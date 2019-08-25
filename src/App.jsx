import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FuzzBuzz from './Components/FuzzBuzz';
import SocialCard from './Components/SocialCard';
import Notfound from './Components/NotFound';
import Stack from './Components/Stack';
import HomePage from './Layout/Home';
import CalulatriceBasic from './Components/Calculator/CalculatriceBasic';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/CalcBasic" component={CalulatriceBasic} />
        <Route path="/FuzzBuzz" component={FuzzBuzz} />
        <Route path="/SocialCard" component={SocialCard} />
        <Route path="/Stack" component={Stack} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
/*
class App extends React.Component {
  constructor() {
    super();
    this.name = 'MyComponent';

    this.handleClick2 = this.handleClick1.bind(this);
  }

  handleClick1() {
    // Cannot read name of undefined.
    alert(this.name);
  }

  handleClick3 = () => alert(this.name);

  //Click 1: Function does nothing???
  //Click 2: This is not bound
  //Click 3: Works, since i
  //Click 4: works arrow function
  render() {
    return (
      <div>
        <button onClick={this.handleClick1()}>click 1</button>
        <button onClick={this.handleClick1}>click 2</button>
        <button onClick={this.handleClick2}>click 3</button>
        <button onClick={this.handleClick3}>click 4</button>
      </div>
    );
  }
}
export default App; */
