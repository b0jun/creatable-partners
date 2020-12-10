import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';

const Router = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </BrowserRouter>
);

export default Router;
