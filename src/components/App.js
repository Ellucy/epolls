import { connect } from 'react-redux';
import { useEffect } from "react";
import { useLocation, Link, Routes, Route } from 'react-router-dom';
import '../App.css';
import Leaderboard from './Leaderboard';
import Home from './Home';
import Poll from './Poll';
import { initData } from '../actions/calls';

function App({ dispatch, isLoading }) {
  const { state } = useLocation();
  const userId = state?.userId;

  useEffect(() => {
    dispatch(initData())
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home userId={userId} />} />
        <Route path="/leaderboard" element={<Leaderboard userId={userId} />} />
        <Route path="/questions/:question_id" element={<Poll userId={userId} />} />
        <Route path='*' element={<div>404 - requested page not found.</div>} />
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ isLoading }) => ({
  isLoading,
});

export default connect(mapStateToProps)(App);
