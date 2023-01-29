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
                Leaderboard!
            </div>
        </WithAuthCheck>
    );
}


export default Leaderboard;
