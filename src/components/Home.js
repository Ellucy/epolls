import { connect } from 'react-redux';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import WithAuthCheck from './WithAuthCheck';
import TopBar from './TopBar';
import { formatDate } from '../utils'

function Home({ userId, newQuestions, answeredQuestions }) {
    const navigate = useNavigate();
    return (
        <WithAuthCheck>
            <TopBar userId={userId} />
            <div className="App">
                <div className='new-done-polls'>
                    <div className='poll-container'>New questions</div>
                    <div className="flex-container">
                        {newQuestions.map((q) => (
                            <div key={q.id} className="question-block">
                                <div className="font-weight-bold">{q.author}</div>
                                <div className="font-size-smaller">{formatDate(q.timestamp)}</div>
                                <button
                                    className='home-btn'
                                    onClick={() => {
                                        navigate(`/questions/${q.id}`, { state: { userId } });
                                    }}
                                >
                                    Show
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='new-done-polls'>
                    <div className='poll-container'>Done</div>
                    <div className="flex-container">
                        {answeredQuestions.map((q) => (
                            <div key={q.id} className="question-block">
                                <div className="font-weight-bold">{q.author}</div>
                                <div className="font-size-smaller">{formatDate(q.timestamp)}</div>
                                <button
                                    className='home-btn'
                                    onClick={() => {
                                        navigate(`/questions/${q.id}`, { state: { userId } });
                                    }}
                                >
                                    Show
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </WithAuthCheck>
    );
}

const mapStateToProps = ({ questions }, { userId }) => {
    const answeredQuestions = Object.values(questions)
        .filter(({ optionOne, optionTwo }) => optionOne.votes.includes(userId) || optionTwo.votes.includes(userId));

    const newQuestions = Object.values(questions)
        .filter(({ optionOne, optionTwo }) => !(optionOne.votes.includes(userId) || optionTwo.votes.includes(userId)));

    return { userId, newQuestions, answeredQuestions };
};

export default connect(mapStateToProps)(Home);