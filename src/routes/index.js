import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import Route from "./Route";

import SignIn from "../pages/signIn/";
import Order from "../pages/order/";
import Deliveryman from "../pages/deliveryman/";
import Recipients from "../pages/recipients/";
import Problem from "../pages/problem/";
import Regdel from "../pages/registerDeliveryman";
import RegRec from "../pages/registerRecipient";
import RegDel from "../pages/registerDelivery";
import UpDelman from "../pages/updateDeliveryman";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/order" component={Order} isPrivate />
        <Route path="/deliveryman" component={Deliveryman} isPrivate />
        <Route path="/recipients" component={Recipients} isPrivate />
        <Route path="/problem" component={Problem} isPrivate />
        <Route path="/registerdeliveryman" component={Regdel} isPrivate />
        <Route path="/updatedeliveryman" component={UpDelman} isPrivate />
        <Route path="/registerrecipient" component={RegRec} isPrivate />
        <Route path="/registerdelivery" component={RegDel} isPrivate />
      </Switch>
    </BrowserRouter>
  );
}
