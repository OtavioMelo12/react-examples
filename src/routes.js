import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyle from "./styles/global";
import Main from "./Main";

import FullScroll from "./Examples/FullScroll";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/fullscroll" component={FullScroll} />
    </Switch>
    <GlobalStyle />
  </BrowserRouter>
);

export default Routes;
