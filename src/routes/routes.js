import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SignIn from "../pages/signIn/";

import Order from "../pages/order/";
import Deliveryman from "../pages/deliveryman/";
import Recipients from "../pages/recipients/";
import Problem from "../pages/problem/";
import Regdel from "../pages/registerDeliveryman";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/order" exact component={Order} />
        <Route path="/deliveryman" exact component={Deliveryman} />
        <Route path="/recipients" exact component={Recipients} />
        <Route path="/problem" exact component={Problem} />
        <Route path="/registerdelivery" exact component={Regdel} />
      </Switch>
    </BrowserRouter>
  );
}
