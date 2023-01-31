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

                <div class="table-container">
                    <table class="leaderboard-results">
                        <thead>
                            <tr>
                                <th>Users</th>
                                <th>Answered</th>
                                <th>Created</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="user-container">
                                    <div class="display-avatar-username">
                                        <img class="display-avatar" src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png" alt="avatar" />
                                        <div class="user-data">
                                            <div class="user-name">Centro comercial Moctezuma</div>
                                            <div class="user-username">username</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="show-amount-of-polls">1</td>
                                <td class="show-amount-of-polls">8</td>
                            </tr>
                            <tr>
                                <td class="user-container">
                                    <div class="display-avatar-username">
                                        <img class="display-avatar" src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png" alt="avatar" />
                                        <div class="user-data">
                                            <div class="user-name">Centro comercial Moctezuma</div>
                                            <div class="user-username">username</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="show-amount-of-polls">2</td>
                                <td class="show-amount-of-polls">5</td>
                            </tr>
                            <tr>
                                <td class="user-container">
                                    <div class="display-avatar-username">
                                        <img class="display-avatar" src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png" alt="avatar" />
                                        <div class="user-data">
                                            <div class="user-name">Eleri Mets</div>
                                            <div class="user-username">mets.eleri@gmail.com</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="show-amount-of-polls">5</td>
                                <td class="show-amount-of-polls">3</td>
                            </tr>
                            <tr>
                                <td class="user-container">
                                    <div class="display-avatar-username">
                                        <img class="display-avatar" src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png" alt="avatar" />
                                        <div class="user-data">
                                            <div class="user-name">Jack Doe</div>
                                            <div class="user-username">sjejfr@gmail.com</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="show-amount-of-polls">1</td>
                                <td class="show-amount-of-polls">6</td>
                            </tr>
                            <tr>
                                <td class="user-container">
                                    <div class="display-avatar-username">
                                        <img class="display-avatar" src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png" alt="avatar" />
                                        <div class="user-data">
                                            <div class="user-name">Centro comercial Moctezuma</div>
                                            <div class="user-username">username</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="show-amount-of-polls">3</td>
                                <td class="show-amount-of-polls">1</td>
                            </tr>
                            <tr>
                                <td class="user-container">
                                    <div class="display-avatar-username">
                                        <img class="display-avatar" src="https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807__340.png" alt="avatar" />
                                        <div class="user-data">
                                            <div class="user-name">Centro comercial Moctezuma</div>
                                            <div class="user-username">username</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="show-amount-of-polls">1</td>
                                <td class="show-amount-of-polls">3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <br></br>
                <Link to="/" state={{ userId: 123 }}>
                    Home
                </Link>
            </div>
        </WithAuthCheck >
    );
}


export default Leaderboard;
