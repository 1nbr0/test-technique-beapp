import '../App.css';
import Navbar from './Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StationList from './StationList.jsx';
import Home from './Home.jsx';
import Map from './Map.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
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
    </Router>
  );
}

export default App;
