import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignIn from "../pages/signIn/";

import Order from "../pages/order/";
import Deliveryman from "../pages/deliveryman/";
import Recipients from "../pages/recipients/";

import Content from "../styles/components/contentDefault";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/order" exact component={Order} />
        <Route path="/deliveryman" exact component={Deliveryman} />
        <Route path="/recipients" exact component={Recipients} />

        <Route path="/content" exact component={Content} />
      </Switch>
    </BrowserRouter>
  );
}
