import { connect } from 'react-redux';
import { useEffect } from "react";
import { useLocation, useParams, Routes, Route } from 'react-router-dom';
import '../App.css';
import Leaderboard from './Leaderboard';
import Home from './Home';
import Poll from './Poll';
import NotFound from './NotFound';
import { initData } from '../actions/calls';
import NewPoll from './NewPoll';

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
        <Route path="/add" element={<NewPoll userId={userId} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ isLoading }) => ({
  isLoading,
});

export default connect(mapStateToProps)(App);
