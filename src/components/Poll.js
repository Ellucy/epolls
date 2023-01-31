import { connect } from 'react-redux';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import WithAuthCheck from './WithAuthCheck'
import TopBar from './TopBar';
import { saveQuestionAnswer } from '../actions/calls';
import NotFound from './NotFound';

function Poll({ userId, questions, users, dispatch }) {
    let { question_id } = useParams();

    const [poll, setPoll] = useState({});
    const [notFound, setNotFound] = useState(false);
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        if (!(questions && question_id)) {
            setPoll({});
            return;
        }

        if (!questions[question_id]) {
            setNotFound(true);
            return;
        }

        setNotFound(false);

        const q = questions[question_id];

        if (q.optionOne.votes.includes(userId)
            || q.optionTwo.votes.includes(userId)) {
            const oneCount = q.optionOne.votes.length;
            const twoCount = q.optionTwo.votes.length;
            const voteCount = oneCount + twoCount;
            const onePerc = (voteCount ? 100 * (oneCount / voteCount) : 0).toFixed(0);
            const twoPerc = (voteCount ? 100 * (twoCount / voteCount) : 0).toFixed(0);
            setPoll({
                q,
                oneCount,
                twoCount,
                onePerc,
                twoPerc,
                isAnswered: true,
                optionOneChosen: q.optionOne.votes.includes(userId),
                optionTwoChosen: q.optionTwo.votes.includes(userId),
            });
            return;
        }

        setPoll({ isNotAnswered: true, q })
    }, [question_id, questions]);

    useEffect(() => {
        if (users && poll?.q?.author && users[poll.q.author]) {
            const authorId = poll.q.author;
            const author = users[authorId];
            setAuthor(author);
            return;
        }
        setAuthor(null);
    }, [users, poll]);

    if (notFound) {
        return <NotFound />;
    }

    return (
        <WithAuthCheck>
            <TopBar userId={userId} />
            <div className="App padding10">
                {poll.isAnswered && (
                    <div>
                        <h2>Poll by {poll.q.author}</h2>
                        <div>
                            {author?.avatarURL && (
                                <img src={author.avatarURL} alt={`Avatar of ${author.id}`} className="big-avatar" />
                            )}
                        </div>
                        <h2>Would You Rather</h2>
                        <div className="flex-row justify-content-space-around">
                            <div className="flex-col-border">
                                <span
                                    className={poll.optionOneChosen ? "font-weight-bold text-decoration-underline color-green" : ""}
                                >
                                    {poll.q.optionOne.text}
                                </span>
                                <span>
                                    Votes: {poll.oneCount}
                                </span>
                                <span>
                                    {poll.onePerc}%
                                </span>
                            </div>
                            <div className="flex-col-border">
                                <span
                                    className={poll.optionTwoChosen ? "font-weight-bold text-decoration-underline color-green" : ""}
                                >
                                    {poll.q.optionTwo.text}
                                </span>
                                <span>
                                    Votes: {poll.twoCount}
                                </span>
                                <span>
                                    {poll.twoPerc}%
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                {poll.isNotAnswered && (
                    <div>
                        <h2>Poll by {poll.q.author}</h2>
                        <div>
                            {author?.avatarURL && (
                                <img src={author.avatarURL} alt={`Avatar of ${author.id}`} className="big-avatar" />
                            )}
                        </div>
                        <h2>Would You Rather</h2>
                        <div className="flex-row justify-content-space-around">
                            <div className="flex-col">
                                <span className="poll-question">{poll.q.optionOne.text}</span>
                                <button
                                    className="btn"
                                    onClick={() => {
                                        dispatch(
                                            saveQuestionAnswer(
                                                {
                                                    authedUser: userId,
                                                    qid: question_id,
                                                    answer: 'optionOne',
                                                }))
                                    }}
                                >
                                    Click
                                </button>
                            </div>
                            <div className="flex-col">
                                <span className="poll-question">{poll.q.optionTwo.text}</span>
                                <button
                                    className="btn"
                                    onClick={() => {
                                        dispatch(
                                            saveQuestionAnswer(
                                                {
                                                    authedUser: userId,
                                                    qid: question_id,
                                                    answer: 'optionTwo',
                                                }))
                                    }}
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
    return {
        userId,
        questions,
        users,
    };
};

export default connect(mapStateToProps)(Poll);
