import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { connect } from 'react-redux';

function Login({ users }) {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <div className="App padding10">
            <select
                value="none"
                className="padding10"
                onChange={(event) => {
                    navigate(
                        pathname,
                        {
                            state: { userId: event.target.value },
                            replace: true
                        }
                    );
                }}
            >
                <option value="none" disabled>
                    Select active user...
                </option>
                {Object.values(users).map((u) => (
                    <option
                        key={u.id}
                        value={u.id}
                    >
                        {u.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
const mapStateToProps = ({ users }) => ({
    users: users,
});

export default connect(mapStateToProps)(Login);