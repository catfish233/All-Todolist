import { combineReducers } from "redux";
import {todoReducer} from "./todoReducer";

export default combineReducers({
  todoReducer,
})//合并reducer