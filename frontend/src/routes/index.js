import React from 'react';
import { Router, Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Profile from '../pages/Profile';
import NovaQuestao from '../pages/NovaQuestao';

import history from '../services/history';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/profile" component={Profile} isPrivate={true} />
        <Route
          path="/questoes/cadastrar"
          component={NovaQuestao}
          isPrivate={true}
        />
      </Switch>
    </Router>
  );
}
