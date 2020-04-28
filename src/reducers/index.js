import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import post from "./post"

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    post: post
    // Outros reducers aqui
  });
