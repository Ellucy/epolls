import { connect } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import WithAuthCheck from './WithAuthCheck'

function Home(props) {
    return (
        <WithAuthCheck>
            <div className="App">
                Home!
                <br></br>
                <Link to="/leaderboard" state={{ userId: 123 }}>
                    Goto leaderboard!
                </Link>
            </div>
        </WithAuthCheck>

    );
}


export default Home;
