import { connect } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

import WithAuthCheck from './WithAuthCheck'
import TopBar from './TopBar';

function Leaderboard({ usersWithStats }) {
    const { state } = useLocation();
    const userId = state?.userId;
    return (
        <WithAuthCheck>
            <TopBar userId={userId} />
            <div className="App">

                <div className="table-container">
                    <table className="leaderboard-results">
                        <thead>
                            <tr>
                                <th>Users</th>
                                <th>Answered</th>
                                <th>Created</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersWithStats.map((u) => (
                                <tr key={u.id}>
                                    <td className="user-container">
                                        <div className="display-avatar-username">
                                            <img className="display-avatar" src={u.avatarURL} alt="avatar" />
                                            <div className="user-data">
                                                <div className="user-name">{u.name}</div>
                                                <div className="user-username">{u.id}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="show-amount-of-polls">{u.questionsAnswered}</td>
                                    <td className="show-amount-of-polls">{u.questionsCreated}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


                <br></br>
            </div>
        </WithAuthCheck >
    );
}

const mapStateToProps = ({ questions, users }) => {
    const questionsByUsers = Object
        .values(questions)
        .reduce((acc, curr) => {
            if (acc[curr.author]) {
                acc[curr.author].push(curr)
                return acc;
            }
            acc[curr.author] = [];
            acc[curr.author].push(curr);
            return acc;
        }, {});

    const usersWithStats = Object
        .values(users)
        .map((u) => {
            const userId = u.id;
            u.questionsCreated = questionsByUsers[u.id]?.length || 0;
            u.questionsAnswered = Object.values(questions)
                .filter(({ optionOne, optionTwo }) => optionOne.votes.includes(userId) || optionTwo.votes.includes(userId))
                .length;
            u.totalQ = u.questionsCreated + u.questionsAnswered;
            return u;
        })
        .sort((a, b) => a.totalQ < b.totalQ ? 1 : -1);
    return {
        usersWithStats,
    };
};

export default connect(mapStateToProps)(Leaderboard);
