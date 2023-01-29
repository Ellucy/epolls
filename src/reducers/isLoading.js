import { SET_MAIN_LOADING } from "../actions/isLoading";

export default function isLoading(state = { isLoading: true }, action) {
    switch (action.type) {
        case SET_MAIN_LOADING:
            return {
                ...state,
                isMainLoading: action.isLoading,
            };
        default:
            return state;
    }
}