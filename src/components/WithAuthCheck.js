import { useLocation, Link } from 'react-router-dom';
import Login from './Login';

function WithAuthCheck({ children }) {
    const { state } = useLocation();
    if (!state?.userId) {
        return <Login />;
    }
    return <>{children}</>;
}

export default WithAuthCheck;