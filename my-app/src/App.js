import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import routes from './Routes/routes';
import NavBar from './components/NavBar';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <NavBar/>
        <div className='container'>
          <Switch>
            {this.showContent(routes)}
          </Switch>
        </div>
      </Router>
    );
  }

  showContent = routes => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}/>
        )
      })
    }
    return result;
  }
}