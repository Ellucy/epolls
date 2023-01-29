import '../App.css';
import { connect } from 'react-redux';
import Leaderboard from './Leaderboard';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';

function App(props) {
  // console.log(props)

  // if (props.isLoading) {
  //   return <div>Loading...</div>
  // }

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path='*' element={<div>404 - requested page not found.</div>} />
      </Routes>
    </div>
  );
}

const mapStateToProps = ({ isLoading }) => ({
  isLoading,
});

export default connect(mapStateToProps)(App);
