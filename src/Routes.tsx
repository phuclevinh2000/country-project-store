import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from './components/Cart/Cart';
import Counter from './components/Counter/Counter';

import Header from './components/Header/Header'
import Home from './components/Home/Home';
import MoreDetail from './components/MoreDetail/MoreDetail';

const Routes : React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {/* <Route exact path="/moredetail" component={Home} />
        <Route exact path="/" component={Home} />
        <Route exact path="/counter" component={Counter} /> */}
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/moredetail/:id">
          <MoreDetail />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
