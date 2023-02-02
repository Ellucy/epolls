import { useLocation, Routes, Route } from 'react-router-dom';
import WithAuthCheck from './WithAuthCheck';
import TopBar from './TopBar';


function NotFound() {
    const { state } = useLocation();
    const userId = state?.userId;

    return (
        <WithAuthCheck>
            <TopBar userId={userId} />
            <div>404 - Requested page not found</div>
        </WithAuthCheck>
    );
}

export default NotFound;