import { applyMiddleware, createStore  } from "redux";
import thunk from "redux-thunk";
import Reducer from "./Reducer";

const middleware = [thunk];

const Store = createStore (Reducer, {}, applyMiddleware(...middleware));

export default Store;
