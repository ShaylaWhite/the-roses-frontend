
import React from 'react';
import GardensContainer from './containers/GardensContainer';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component{

  // component class
  //react routers A Switch renders the first child <Route> 
  ///or <Redirect> that matches the location

  render() {
    return (
      <div>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
             <Route exact path="/" component={HomePage} />
          </Switch>
          <Switch>
          <GardensContainer />
          </Switch>    
        </div>
    </Router>
  </div>

    );
  }
}


export default App;

// export functions, objects, classes or expressions from script files or modules