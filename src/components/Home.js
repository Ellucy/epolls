import { connect } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import WithAuthCheck from './WithAuthCheck';
import TopBar from './TopBar';

function Home(props) {
    const { state } = useLocation();
    const userId = state?.userId;

    return (
        <WithAuthCheck>
            <TopBar userId={userId} />
            <div className="App">
                Home!
            </div>
        </WithAuthCheck>
    );
}

export default Home;