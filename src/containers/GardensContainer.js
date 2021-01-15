
import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchGardens} from '../actions/fetchGardens'
import Gardens from '../components/Gardens'
import Garden from '../components/Garden'
import GardenInput from '../components/GardenInput'
import NavBar from '../components/NavBar'

class GardensContainer extends React.Component {

    componentDidMount() {
        this.props.fetchGardens()
    }
  
    render() {
        return (
            <div>
              <NavBar/>
              <Switch>
                <Route path='/gardens/new' component={GardenInput}/>
                <Route path='/gardens/:id' render={(routerProps) => <Garden {...routerProps} gardens={this.props.gardens}/>}/>
                <Route path='/gardens' render={(routerProps) => <Gardens {...routerProps} gardens={this.props.gardens}/>}/>
              </Switch>
  
            </div>
        )
    }
  }

const mapStateToProps = state => {
    return {
      gardens: state.gardens
    }
  }

  export default connect(mapStateToProps, {fetchGardens})(GardensContainer)
