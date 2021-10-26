import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './components/Header/Header'
import Home from './components/Home/Home';
import MoreDetail from './components/MoreDetail/MoreDetail';


const Routes : React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={MoreDetail} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
