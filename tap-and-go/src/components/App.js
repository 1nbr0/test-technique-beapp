import logo from '../logo.svg';
import '../App.css';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Banner />
      </header>
    </div>
  );
}

export default App;
