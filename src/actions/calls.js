import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
} from "../DATA";
import { setQuestions } from "./questions";
import { setUsers } from "./users";
import { setIsLoading } from "./isLoading";

export function initData() {
    return async (dispatch) => {
        dispatch(setIsLoading(true));
        const [usersRes, questionsRes] = await Promise
            .allSettled([_getUsers(), _getQuestions()]);
        dispatch(setUsers(usersRes.value));
        dispatch(setQuestions(questionsRes.value));
        dispatch(setIsLoading(false));
    };
}

export function saveQuestionAnswer(question) {
    return async (dispatch) => {
        await _saveQuestionAnswer(question);
        const questions = await _getQuestions();
        dispatch(setQuestions(questions));

    };
}