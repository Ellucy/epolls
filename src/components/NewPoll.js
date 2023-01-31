import { connect } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

import WithAuthCheck from './WithAuthCheck'
import TopBar from './TopBar';

function NewPoll(props) {
    const { state } = useLocation();
    const userId = state?.userId;
    return (
        <WithAuthCheck>
            <TopBar userId={userId} />
            <div className="App">
                <div className="new-poll-container">
                    <h2>Would You Rather</h2>
                    <p>Create Your Own Poll</p>
                    <div className="cleate-new-poll">
                        <div>
                            <div className="choose-option" >First Option</div>
                            <input type="text" className="add-option"></input>
                        </div>
                        <div>
                            <div className="choose-option">Second Option</div>
                            <input type="text" className="add-option"></input>
                        </div>
                    </div>
                    <button className="submit-button" role="button">Submit</button>


                </div>
            </div>
        </WithAuthCheck >
    );
    return {
        props
    };
}


export default NewPoll;
