import React from "react";
import { Switch } from "react-router-dom";

import SignIn from "../pages/signIn/";
import Order from "../pages/order/";
import Deliveryman from "../pages/deliveryman/";
import Recipients from "../pages/recipients/";
import Problem from "../pages/problem/";
import Regdel from "../pages/registerDeliveryman";
import RegRec from "../pages/registerRecipient";
import RegDel from "../pages/registerDelivery";

import Route from "./Route";
export default function Routes() {
  return (
    <Switch>
      {/* login */}
      <Route path="/" exact component={SignIn} />

      {/* list */}
      <Route path="/order" component={Order} isPrivate />
      <Route path="/deliveryman" component={Deliveryman} isPrivate />
      <Route path="/recipients" component={Recipients} isPrivate />
      <Route path="/problem" component={Problem} isPrivate />

      {/* edit/update */}
      <Route path="/registerdeliveryman" component={Regdel} isPrivate />
      <Route path="/updatedeliveryman/:id" component={Regdel} isPrivate />

      <Route path="/registerrecipient" component={RegRec} isPrivate />
      <Route path="/updaterecipient/:id" component={RegRec} isPrivate />

      <Route path="/registerdelivery" component={RegDel} isPrivate />
    </Switch>
  );
}
