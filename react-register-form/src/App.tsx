import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Menu, RegisterForm } from './pages';
import history from './utils/history';

function App(): JSX.Element {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={RegisterForm} />
        <Route exact path='/menu' component={Menu} />
      </Switch>
    </Router>
  );
}

export default App;
