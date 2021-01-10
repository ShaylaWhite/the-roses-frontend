
import React from 'react';
import {connect} from 'react-redux'
import GardensContainer from './containers/GardensContainer'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <GardensContainer/>
      </div>
    );
  }
}


export default connect()(App);