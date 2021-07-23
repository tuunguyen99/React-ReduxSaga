import React from "react";
import { Router } from "react-router-dom";
import { MyRoutes } from "./routes";
import { history } from "./helpers";
import rootReducer from "src/redux";
import rootSaga from "./redux/index-saga";
import { createStore,applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga); 

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
