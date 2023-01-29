import { combineReducers } from "redux";
import isLoading from "./isLoading";
import authentication from "./authentication";

export default combineReducers({
    isLoading,
    authentication,
});
