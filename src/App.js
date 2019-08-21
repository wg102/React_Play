import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import FuzzBuzz from './Components/FuzzBuzz';
import SocialCard from './Components/SocialCard';
import Notfound from './Components/NotFound';
import Stack from './Components/Stack';
import HomePage from './Layout/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/FuzzBuzz" component={FuzzBuzz} />
        <Route path="/SocialCard" component={SocialCard} />
        <Route path="/Stack" component={Stack} />
        <Route component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
