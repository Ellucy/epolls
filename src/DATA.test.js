import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
} from "./DATA";

describe('_getUsers', () => {
    it('returns data', async () => {
        const r = await _getUsers();
        expect(r.sarahedo.id).toEqual('sarahedo');
    });
});

describe('_getQuestions', () => {
    it('returns data', async () => {
        const r = await _getQuestions();
        expect(r['8xf0y6ziyjabvozdd253nd'].id).toEqual('8xf0y6ziyjabvozdd253nd');

    });
});

describe('_saveQuestion', () => {
    it('returns saved question and all expected fields are populated when correctly formatted data is passed to the function', async () => {
        const q = {
            optionOneText: 'optionOneText',
            optionTwoText: 'optionTwoText',
            author: 'author',
        }
        const r = await _saveQuestion(q);
        expect(r.optionOne.text).toEqual(q.optionOneText);
        expect(r.optionTwo.text).toEqual(q.optionTwoText);
        expect(r.author).toEqual(q.author);
    });

    it('returns error if incorrect data is passed to the function', async () => {
        try {
            const q = {}
            const r = await _saveQuestion(q);
            expect(true).toEqual(false);
        } catch (error) {
            expect(error).toEqual("Please provide optionOneText, optionTwoText, and author");
        }
    });
});

describe('_saveQuestionAnswer', () => {
    it('returns saved question and all expected fields are populated when correctly formatted data is passed to the function', async () => {
        const q = {
            authedUser: 'tylermcginnis',
            qid: '8xf0y6ziyjabvozdd253nd',
            answer: 'optionTwo',
        }
        const r = await _saveQuestionAnswer(q);
        // console.log(r)
        // expect(r).toEqual(true);
    });

    it('returns error if incorrect data is passed to the function', async () => {
        try {
            const q = {}
            const r = await _saveQuestionAnswer(q);
            expect(true).toEqual(false);
        } catch (error) {
            expect(error).toEqual("Please provide authedUser, qid, and answer");
        }
    });
});