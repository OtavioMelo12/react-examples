import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyle from "./styles/global";

import Main from "./Main";
import FullScroll from "./Examples/FullScroll";
import Cards from "./Examples/Cards";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/fullscroll" component={FullScroll} />
      <Route path="/cards" component={Cards} />
    </Switch>
    <GlobalStyle />
  </BrowserRouter>
);

export default Routes;
