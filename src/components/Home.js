import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import WithAuthCheck from './WithAuthCheck';
import TopBar from './TopBar';
import { formatDate } from '../utils'

function Home({ userId, newQuestions, answeredQuestions }) {
    const navigate = useNavigate();
    const [isNewPollVisible, setIsNewPollVisible] = useState(true);
    return (
        <WithAuthCheck>
            <TopBar userId={userId} />
            <div className="App">
                <button
                    className="submit-button"
                    onClick={() => {
                        setIsNewPollVisible(!isNewPollVisible)
                    }}
                >
                    {isNewPollVisible
                        ? ("Show answered polls")
                        : ("Show new polls")}
                </button>

                {isNewPollVisible && (
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
                )}

                {!isNewPollVisible && (
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
                )}

            </div>
        </WithAuthCheck>
    );
}

const mapStateToProps = ({ questions }, { userId }) => {
    const answeredQuestions = Object.values(questions)
        .filter(({ optionOne, optionTwo }) => optionOne.votes.includes(userId) || optionTwo.votes.includes(userId))
        .sort((a, b) => a.timestamp < b.timestamp ? 1 : -1);

    const newQuestions = Object.values(questions)
        .filter(({ optionOne, optionTwo }) => !(optionOne.votes.includes(userId) || optionTwo.votes.includes(userId)))
        .sort((a, b) => a.timestamp < b.timestamp ? 1 : -1);

    return { userId, newQuestions, answeredQuestions };
};

export default connect(mapStateToProps)(Home);