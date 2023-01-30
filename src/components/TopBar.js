import { connect } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

function TopBar({ activeUser }) {
    const { state, pathname } = useLocation();
    const userId = state?.userId;
    return (
        <header>
            <div className='flex-row justify-content-space-between padding10'>
                <div className='flex-row align-items-center'>
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
                        {activeUser?.avatarURL && (
                            <img src={activeUser.avatarURL} alt={`Avatar of ${activeUser.id}`} className="avatar-small" />
                        )}
                        {activeUser?.name && (
                            <span className='margin-right10'>{activeUser.name}</span>
                        )}
                        <Link
                            to="/"
                            className='link-not-active' s
                        >
                            Logout
                        </Link>
                    </div>



                </div>
            </div>
        </header>
    );
}

const mapStateToProps = ({ users }, { userId }) => ({
    activeUser: users[userId],
});

export default connect(mapStateToProps)(TopBar);