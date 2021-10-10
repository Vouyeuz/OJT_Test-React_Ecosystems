// gausa pake thunk dulu
// import { combineReducers, createStore, applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import { users } from "./containers/react_ecosystem/reducers";

const reducers = { users };

const persistConfig = {
  key: "root",
  storage,
  // find out about how 3 states applies.
  stateReconciler: autoMergeLevel2,
};

// add another top-level reducer for adjusting reset
// const appReducer = combineReducers(reducers);
// const rootReducer = (state, action) => {
//     if(action.type === 'USER_LOGOUT') {
//         return appReducer(undefined, action)
//     }
//     return appReducer(state, action)
// }

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () =>
  createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
// export const configureStore = createStore(
//   persistedReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );
