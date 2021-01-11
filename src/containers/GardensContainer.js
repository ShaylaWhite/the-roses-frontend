import React from 'react'
import {connect} from 'react-redux'
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
                <GardenInput/>
                <Gardens gardens={this.props.gardens}/>
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
