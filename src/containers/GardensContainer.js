import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchGardens} from '../actions/fetchGardens'
import Gardens from '../components/Gardens'
import Garden from '../components/Garden'
import GardenInput from '../components/GardenInput'
//houses data + methods 

class GardensContainer extends React.Component {

    componentDidMount() {
        this.props.fetchGardens()
    }
  
    render() {
        return (
            <div>

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



{/* <Provider store> wraps the React application and makes the Redux state
 available to all container components in the application’s hierarchy

connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options]) 
creates a higher-order component for making container components out of base React components */}