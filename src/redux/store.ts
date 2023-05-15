import { legacy_createStore as createStore, combineReducers } from "redux";

import reducerCounter from "./reducers/reducerCounter";
import reducerPhone from "./reducers/reducerPhone";

const combReducers = combineReducers({
  counterReducer: reducerCounter,
  phoneReducer: reducerPhone,
});
const store = createStore(combReducers);
export default store;
