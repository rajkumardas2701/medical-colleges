import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import CollegeDetail from './components/CollegeDetail';
import NotFound from './layouts/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/details/:id" component={CollegeDetail} />
      <Route exact component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
