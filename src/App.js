import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './containers/Login/Login';
import Home from './containers/Home/Home';
import DetailsForm from './components/DetailsForm/DetailsForm';
import WorkLog from './components/WorkLog/WorkLog';

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <Switch>
          <Route path='/Login' component={Login} exact />
          <Route path='/Home' component={Home} exact/>
          <Route path='/DetailsForm' component={DetailsForm} exact/>
          <Route path='/WorkDetails' component={WorkLog} exact/>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
