import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Responsive from '../components/Common/Responsive';
import Header from '../components/Header';
import Home from './Home';

const Router = () => (
  <BrowserRouter>
    <>
      <Header />
      <Responsive>
        <Switch>
          <Route path="/" exact component={Home} />
          <Redirect from="*" to="/" />
        </Switch>
      </Responsive>
    </>
  </BrowserRouter>
);

export default Router;
