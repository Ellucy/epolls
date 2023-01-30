import { connect } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import WithAuthCheck from './WithAuthCheck';
import TopBar from './TopBar';
import { formatDate } from '../utils'

function Home({ userId, newQuestions, answeredQuestions }) {
    return (
        <WithAuthCheck>
            <TopBar userId={userId} />
            <div className="App">
                <h2>New questions</h2>
                {newQuestions.map((q) => (
                    <div key={q.id} className="padding10">
                        <div className="font-weight-bold">{q.author}</div>
                        <div className="font-size-smaller">{formatDate(q.timestamp)}</div>
                        <button className='btn'>Show</button>
                    </div>
                ))}
                <h2>Done</h2>
                {answeredQuestions.map((q) => (
                    <div key={q.id} className="padding10">
                        <div className="font-weight-bold">{q.author}</div>
                        <div className="font-size-smaller">{formatDate(q.timestamp)}</div>
                    </div>
                ))}
            </div>
        </WithAuthCheck>
    );
}

const mapStateToProps = ({ users, questions }, { userId }) => {
    const answeredQuestions = Object.values(questions)
        .filter(({ optionOne, optionTwo }) => optionOne.votes.includes(userId) || optionTwo.votes.includes(userId));

    const newQuestions = Object.values(questions)
        .filter(({ optionOne, optionTwo }) => !(optionOne.votes.includes(userId) || optionTwo.votes.includes(userId)));

    return { userId, newQuestions, answeredQuestions };
};

export default connect(mapStateToProps)(Home);