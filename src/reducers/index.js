import { combineReducers } from "redux";
import isLoading from "./isLoading";
import users from "./users";
import questions from './questions';

export default combineReducers({
    isLoading,
    users,
    questions,
});
