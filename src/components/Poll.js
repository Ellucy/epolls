import { connect } from 'react-redux';
import { useEffect } from "react";
import { useLocation, Link, useParams } from 'react-router-dom';
import WithAuthCheck from './WithAuthCheck'
import TopBar from './TopBar';

function Poll({ userId, questions, users }) {
    const loc = useLocation();
    // const userId = state?.userId;
    let { question_id } = useParams();
    useEffect(() => {
        console.log(questions[question_id])
    }, [question_id]);
    return (
        <WithAuthCheck>
            <TopBar userId={userId} />
            <div className="App padding10">
                {questions && questions[question_id] && (
                    <div>
                        <h2>Poll by {questions[question_id].author}</h2>
                        <div>Large avatar</div>
                        <h2>Would You Rather</h2>
                        <div className="flex-row justify-content-space-around">
                            <div className="flex-col">
                                <span>{questions[question_id].optionOne.text}</span>
                                <button
                                    className="btn"
                                >
                                    Click
                                </button>
                            </div>
                            <div className="flex-col">
                                <span>{questions[question_id].optionTwo.text}</span>
                                <button
                                    className="btn"
                                >
                                    Click
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </WithAuthCheck>
    );
}

const mapStateToProps = ({ questions, users }, { userId }) => {
    // const { state } = useLocation();
    // const answeredQuestions = Object.values(questions)
    //     .filter(({ optionOne, optionTwo }) => optionOne.votes.includes(userId) || optionTwo.votes.includes(userId));

    // const newQuestions = Object.values(questions)
    //     .filter(({ optionOne, optionTwo }) => !(optionOne.votes.includes(userId) || optionTwo.votes.includes(userId)));
    return {
        userId, questions, users
    };
};

export default connect(mapStateToProps)(Poll);
