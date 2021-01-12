import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchGardens} from '../actions/fetchGardens'
import Gardens from '../components/Gardens'
import GardenInput from '../components/GardenInput'



class GardensContainer extends React.Component {

    componentDidMount() {
        this.props.fetchGardens()
    }
  
    render() {
        return (
            <div>
              <Route path='/gardens/new' component={GardenInput}/>
              <Route path='/gardens/:id' render={(routerProps) => <Garden {...routerProps} gardens={this.props.gardens}/>}/>
              <Route path='/gardens' render={(routerProps) => <Gardens {...routerProps} accounts={this.props.gardens}/>}/>
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
