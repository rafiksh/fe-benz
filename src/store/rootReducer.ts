import { combineReducers, Reducer } from "redux";

const createRootReducer = (routerReducer: Reducer) =>
  combineReducers({
    router: routerReducer,
  });
export default createRootReducer;
