import { connect } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

// show top bar for every page and check if 
function TopBar(props) {
    const { state, pathname } = useLocation();
    const userId = state?.userId;
    return (
        <header>
            <div className='flex-row justify-content-space-between padding10'>
                <div className='flex-row'>
                    <Link
                        to="/"
                        state={{ userId }}
                        className={pathname === '/' ? 'link-active' : 'link-not-active'}
                    >
                        Home
                    </Link>
                    <Link
                        to="/leaderboard"
                        state={{ userId }}
                        className={pathname === '/leaderboard' ? 'link-active' : 'link-not-active'}
                    >
                        Leaderboard
                    </Link>
                    <Link
                        to="/new"
                        state={{ userId }}
                        className={pathname === '/new' ? 'link-active' : 'link-not-active'}
                    >
                        New
                    </Link>
                </div>
                <div className='flex-row'>
                    <div className='avatar-box'>
                        Avatar
                    </div>
                    <Link
                        to="/"
                        className='link-not-active'
                    >
                        Logout
                    </Link>
                </div>
            </div>
        </header >
    );
}


export default TopBar;