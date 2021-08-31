import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import ProductDetail from './components/dashboard/ProductDetail'
import TrackOrderDetail from './components/dashboard/TrackOrdersDetail'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/Dashboard' component={Dashboard}/>
          {/* <Route exact path='/Dashboard/products/:id' component={ProductDetail}/>
          <Route exact path='/Dashboard/track-order/:id' component={TrackOrderDetail}/> */}
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);