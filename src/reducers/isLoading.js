import { SET_IS_LOADING } from "../actions/isLoading";

export default function isLoading(state = false, action) {
    switch (action.type) {
        case SET_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}