import '../App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StationList from './StationList';
import Home from './Home';
import Map from './Map';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/map">
              <Map />
            </Route>
            <Route path="/stationList">
              <StationList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
