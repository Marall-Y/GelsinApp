import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { loadState, saveState } from "./utils/localStorage";
import { cartReducer } from "./redux/reducers/cart/cartReducer";
// import { loginReducer } from "./redux/reducers/login/loginReducer";

const reducer = combineReducers({
  cart: cartReducer,
  //   login: loginReducer,
});

const middleware = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedLoadState = loadState("cart");

const store = createStore(
  reducer,
  { cart: persistedLoadState },
  composeEnhancer(applyMiddleware(...middleware))
);

store.subscribe(() => saveState("cart", store.getState()["cart"]));

export default store;
