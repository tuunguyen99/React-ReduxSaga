import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";
import { PrivateRoute } from "src/components";
import { HomePage, PageLogin, PageNotFound } from "./pages";
export const MyRoutes = () => {
  const pathname = useLocation().pathname || "";

  return (
    <div>
      <Switch>
        <Route exact path="/login" component={PageLogin} />
        <PrivateRoute exact path="/" component={HomePage} />
        <Redirect from="*" to="/" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};
