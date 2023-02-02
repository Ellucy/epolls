import { useState } from "react";
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import WithAuthCheck from './WithAuthCheck'
import TopBar from './TopBar';
import { saveQuestion } from '../actions/calls';

function NewPoll({ dispatch }) {
    const { state } = useLocation();
    const userId = state?.userId;
    const navigate = useNavigate();
    const [optionOneText, setOptionOneText] = useState("");
    const [optionTwoText, setOptionTwoText] = useState("");
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
                            <input
                                type="text" className="add-option"
                                value={optionOneText}
                                onChange={(e) => {
                                    setOptionOneText(e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <div className="choose-option">Second Option</div>
                            <input
                                type="text" className="add-option"
                                value={optionTwoText}
                                onChange={(e) => {
                                    setOptionTwoText(e.target.value);
                                }}
                            />
                        </div>
                    </div>

                    <button
                        className="submit-button"
                        role="button"
                        onClick={() => {
                            if (optionOneText.length && optionTwoText.length) {
                                dispatch(
                                    saveQuestion(
                                        {
                                            optionOneText,
                                            optionTwoText,
                                            author: userId,
                                        }))
                                    .then(() => {
                                        navigate("/", { state: { userId } });
                                    });
                            }
                        }}
                    >
                        Submit
                    </button>


                </div>
            </div>
        </WithAuthCheck >
    );
}

export default connect()(NewPoll);
