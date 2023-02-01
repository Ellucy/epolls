const mockedUsedNavigate = jest.fn();
const mockedUsedLocation = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
    useLocation: () => mockedUsedLocation,

}));

import { render, fireEvent } from '@testing-library/react';
import { Login } from './Login';

const usersObj = {
    sarahedo: {
        id: 'sarahedo',
        password: 'password123',
        name: 'Sarah Edo',
        avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
        answers: {
            "8xf0y6ziyjabvozdd253nd": 'optionOne',
            "6ni6ok3ym7mf1p33lnez": 'optionOne',
            "am8ehyc8byjqgar0jgpub9": 'optionTwo',
            "loxhs1bqm25b708cmbf3g": 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
    tylermcginnis: {
        id: 'tylermcginnis',
        password: 'abc321',
        name: 'Tyler McGinnis',
        avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
        answers: {
            "vthrdm985a262al8qx3do": 'optionOne',
            "xj352vofupe1dqz9emx13r": 'optionTwo',
        },
        questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    },
};

describe('Greetings', () => {

    it('matches the snapshot when empty user object passed', () => {
        const component = render(<Login users={{}} />);
        expect(component).toMatchSnapshot();
    });

    it('matches the snapshot when user object passed', () => {
        const component = render(<Login users={usersObj} />);
        expect(component).toMatchSnapshot();
    });

    it('checks that log in button is not present initially', () => {
        const component = render(<Login users={usersObj} />);
        expect(component.queryByTestId('submit-button')).not.toBeInTheDocument();
    });

    it('checks that log in button is present after user has been selected', () => {
        const component = render(<Login users={usersObj} />);
        fireEvent.change(component.getByTestId('select-user'), { target: { value: 'sarahedo' } })
        expect(component.queryByTestId('submit-button')).toBeInTheDocument();
    });

});
