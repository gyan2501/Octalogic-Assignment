import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./Auth/reducer";
import { reducer as courseReducer } from "./course/reducer";

const rootReducer = combineReducers({
  authReducer,
  courseReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
