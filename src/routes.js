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
        <PrivateRoute exact path="/" component={HomePage} />
        <Route path="/login" component={PageLogin} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
};
