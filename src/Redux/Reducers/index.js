import lang from "./lang";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  lang,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
