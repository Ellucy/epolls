import { SET_AUTHENTICATED_USER, LOG_OUT } from "../actions/authentication";

export default function isLoading(state = {}, action) {
    switch (action.type) {
        case SET_AUTHENTICATED_USER:
            return {
                ...state,
                authenticatedUserId: id,
            };
        case LOG_OUT:
            return {};
        default:
            return state;
    }
}