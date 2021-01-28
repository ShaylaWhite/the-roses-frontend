import React from 'react'
import {connect} from 'react-redux'
import {addGarden} from '../actions/addGarden'

import { Link } from 'react-router-dom'

class GardenInput extends React.Component {
 

        state = {  
             name: '',
             feels: '',
             date: ''  
          } 
      

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addGarden(this.state)
        this.setState({
            name: '',
            feels: '',
            date: ''
        })
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label>Name Your Garden:</label>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <label>How Was Your Day?</label>
                    <input type='text' placeholder='Today Feels' value={this.state.feels} name="feels" onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <label>Date</label>
                    <input type='date' placeholder='Date' value={this.state.date} name="date" onChange={this.handleChange}/>
                    <br/>
                    <input type="submit"/>
                     <br/>
                     <br/>
                    <Link to="/gardens"> See New Garden </Link>

                </form>
            </div>
     )
    }
  }
  

export default connect(null, {addGarden})(GardenInput)

/////Parent components holding state should be like the motherboard of state
