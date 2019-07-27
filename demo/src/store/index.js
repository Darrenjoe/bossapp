import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import mySagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({})
  : compose;

const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware));
// const enhancers = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancers);
sagaMiddleware.run(mySagas);
export default store;
