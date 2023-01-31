import { connect } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

import WithAuthCheck from './WithAuthCheck'
import TopBar from './TopBar';

function Leaderboard(props) {
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
                            <tr>
                                <td className="user-container">
                                    <div className="display-avatar-username">
                                        <img className="display-avatar" src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png" alt="avatar" />
                                        <div className="user-data">
                                            <div className="user-name">Centro comercial Moctezuma</div>
                                            <div className="user-username">username</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="show-amount-of-polls">1</td>
                                <td className="show-amount-of-polls">8</td>
                            </tr>
                            <tr>
                                <td className="user-container">
                                    <div className="display-avatar-username">
                                        <img className="display-avatar" src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png" alt="avatar" />
                                        <div className="user-data">
                                            <div className="user-name">Centro comercial Moctezuma</div>
                                            <div className="user-username">username</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="show-amount-of-polls">2</td>
                                <td className="show-amount-of-polls">5</td>
                            </tr>
                            <tr>
                                <td className="user-container">
                                    <div className="display-avatar-username">
                                        <img className="display-avatar" src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png" alt="avatar" />
                                        <div className="user-data">
                                            <div className="user-name">Eleri Mets</div>
                                            <div className="user-username">mets.eleri@gmail.com</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="show-amount-of-polls">5</td>
                                <td className="show-amount-of-polls">3</td>
                            </tr>
                            <tr>
                                <td className="user-container">
                                    <div className="display-avatar-username">
                                        <img className="display-avatar" src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png" alt="avatar" />
                                        <div className="user-data">
                                            <div className="user-name">Jack Doe</div>
                                            <div className="user-username">sjejfr@gmail.com</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="show-amount-of-polls">1</td>
                                <td className="show-amount-of-polls">6</td>
                            </tr>
                            <tr>
                                <td className="user-container">
                                    <div className="display-avatar-username">
                                        <img className="display-avatar" src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png" alt="avatar" />
                                        <div className="user-data">
                                            <div className="user-name">Centro comercial Moctezuma</div>
                                            <div className="user-username">username</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="show-amount-of-polls">3</td>
                                <td className="show-amount-of-polls">1</td>
                            </tr>
                            <tr>
                                <td className="user-container">
                                    <div className="display-avatar-username">
                                        <img className="display-avatar" src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png" alt="avatar" />
                                        <div className="user-data">
                                            <div className="user-name">Centro comercial Moctezuma</div>
                                            <div className="user-username">username</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="show-amount-of-polls">1</td>
                                <td className="show-amount-of-polls">3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <br></br>
            </div>
        </WithAuthCheck >
    );
}


export default Leaderboard;
