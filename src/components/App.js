import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux';

function App(props) {
  console.log(props)

  if (props.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      Hello!
    </div>
  );
}

const mapStateToProps = ({ isLoading }) => ({
  isLoading,
});

export default connect(mapStateToProps)(App);
