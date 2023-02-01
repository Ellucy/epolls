import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { connect } from 'react-redux';

function Login({ users }) {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [selectedUserId, setSelectedUserId] = useState("none");
    const [selectedUser, setSelectedUser] = useState({});

    useEffect(() => {
        if (users[selectedUserId]) {
            setSelectedUser(users[selectedUserId]);
            return
        }
        setSelectedUser({});

    }, [selectedUserId, users]);

    return (
        <div className="App padding10">
            <div className="signin-container">
                <div className="login-header">Employee Polls</div>
                <select
                    value={selectedUserId}
                    className="login-padding10"
                    onChange={(e) => {
                        setSelectedUserId(e.target.value)
                    }}
                >
                    <option value="none" disabled>
                        Select user...
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
                <div>
                    {selectedUser?.avatarURL && (
                        <img src={selectedUser.avatarURL} alt={`Avatar of ${selectedUser.id}`} className="big-avatar" />
                    )}
                </div>
                {selectedUserId !== "none" ?
                    (
                        <button
                            className="submit-button"
                            onClick={() => {
                                navigate(
                                    pathname,
                                    {
                                        state: { userId: selectedUserId },
                                        replace: true
                                    }
                                );
                            }}
                        >
                            Submit
                        </button>
                    ) : null}

            </div>
        </div >
    );
}

const mapStateToProps = ({ users }) => ({
    users,
});

export default connect(mapStateToProps)(Login);