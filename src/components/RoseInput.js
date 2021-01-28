import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addRose} from '../actions/addRose'



class RoseInput extends Component { 
  constructor(){
    super()
        this.state = {
          petals: '',
          thorns: '',
          water: ''  

      } 
  
    }
  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addRose(this.state, this.props.garden.id)
        alert('Successfully Added')
        this.setState({
            petals: '',
            thorns: '',
            water: ''
        })
    }


    render() {
      return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>What Are Roses For Today?</label>
            <br/>
            <br/>
              <label>What are you (highlights) petals for today?</label>
              <br/>
               <input type="text" name="petals" value={this.state.petals} onChange={this.handleChange}/>
              <br/>
              <br/>
              
              <label>What are you (lows) thorns for today?</label>
              <br/>
               <input type="text" name="thorns" value={this.state.thorns} onChange={this.handleChange}/>

               <br/>
              <br/>
              
              <label>How can you water your garden today?</label>
              <br/>
               <input type="text" name="water" value={this.state.water} onChange={this.handleChange}/>

              <input type="submit"/>
            </form>
          </div>
        )
    
      }
    }
    

export default connect(null, {addRose})(RoseInput)



///Parent components holding state should be like the motherboard of state
