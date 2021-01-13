import React from 'react'
import {connect} from 'react-redux'



class RoseInput extends React.Component {


    state = {
        petals: '',
        thorns: '',
        water: ''
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
               <input type="textarea" name="petals" value={this.state.petals}/>
              <br/>
              <br/>
              
              <label>What are you (lows) thorns for today?</label>
              <br/>
               <input type="textarea" name="thorns" value={this.state.thorns}/>

               <br/>
              <br/>
              
              <label>How can you water your garden today?</label>
              <br/>
               <input type="text" name="water" value={this.state.water}/>



              <input type="submit"/>
            </form>
          </div>
        )
    
      }
    }
    

export default connect(null)(RoseInput)









export default GardenInput