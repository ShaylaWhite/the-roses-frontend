import React from 'react'
import {connect} from 'react-redux'



class RoseInput extends React.Component {


    state = {
        petals: '',
        thorns: '',
        water: ''
      }
    
      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }


    handleSubmit = (event) => {
    event.preventDefault()
    this.props.addRose(this.state, this.props.account.id)
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
               <input type="textarea" name="petals" value={this.state.petals} onChange={this.handleChange}/>
              <br/>
              <br/>
              
              <label>What are you (lows) thorns for today?</label>
              <br/>
               <input type="textarea" name="thorns" value={this.state.thorns} onChange={this.handleChange}/>

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
    

export default connect(null)(RoseInput)




