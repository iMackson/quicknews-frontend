import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Home from './components/Home';
import NewsItemDetail from './components/NewsItemDetail';
import Navbar from './components/Navbar';

const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          {/* <Route exact path="/">
            <Home />
          </Route> */}
          <Route exact path='/:newsItemId' component={NewsItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
