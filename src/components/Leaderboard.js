import { connect } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

import WithAuthCheck from './WithAuthCheck'

function Leaderboard(props) {
    return (
        <WithAuthCheck>
            <div className="App">
                Leaderboard!
                <br></br>
                <Link to="/" state={{ userId: 123 }}>
                    Home
                </Link>
            </div>
        </WithAuthCheck>
    );
}


export default Leaderboard;
