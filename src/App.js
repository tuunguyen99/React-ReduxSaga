import React from "react";
import { Router } from "react-router-dom";
import {MyRoutes} from "./routes";
import {history} from './helpers'

const App = (props) => {

  return (
    <div>
      <Router history={history}>
        <MyRoutes />
      </Router>
    </div>
  );
};

export default App;
