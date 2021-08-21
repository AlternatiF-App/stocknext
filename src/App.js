import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import DashboardPage from './components/dashboard/DashboardPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path={["/dashboard-page/:page"]} component={DashboardPage}/>
      </Switch>
    </Router>
  );
}

export default App;
