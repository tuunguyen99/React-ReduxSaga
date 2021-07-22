import React from "react";
import { Router } from "react-router-dom";
import { MyRoutes } from "./routes";
import { history } from "./helpers";
import rootReducer from "src/redux";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

const App = (props) => {
  return (
    <div>
      <Provider store={store}>
        <Router history={history}>
          <MyRoutes />
        </Router>
      </Provider>
    </div>
  );
};

export default App;
