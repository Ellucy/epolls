import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate();
    const { pathname, state } = useLocation();

    return (
        <div className="App">
            <form>
                <select>
                    <option>1</option>
                    <option>2</option>
                </select>
                <button onClick={() => {
                    navigate(
                        pathname,
                        { state: { userId: 123 }, replace: true }
                    );
                }}>
                    Go
                </button>
            </form>
        </div>
    );
}

export default Login;