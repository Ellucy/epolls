import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
} from "./DATA";

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
            console.log(error)
            expect(error).toEqual("Please provide optionOneText, optionTwoText, and author");
        }
    });
});