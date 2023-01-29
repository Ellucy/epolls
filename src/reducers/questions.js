import { SET_QUESTIONS } from "../actions/questions";

export default function isLoading(state = {}, action) {
    switch (action.type) {
        case SET_QUESTIONS:
            return action.questions;
        default:
            return state;
    }
}