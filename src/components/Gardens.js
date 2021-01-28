import React from 'react'
import {connect} from 'react-redux'

import { Link } from 'react-router-dom'


class Gardens extends React.Component {

  state  =  {}

  vote = (id) => {
    this.state[id] ? this.setState({[id]: this.state[id] + 1}) : this.setState({[id]: 1})
  }

  votedown = (id) => {
    this.state[id] ? this.setState({[id]: this.state[id] - 1}) : this.setState({[id]: 0})
  }
  
  render() {        
      return (
    <div> 
      {this.props.gardens.map(garden =>
    
        <ul key={garden.id}>
           Garden  <Link to={`/gardens/${garden.attributes.id}`}>{garden.attributes.name} </Link>
            <br/> Feels for the day: | {garden.attributes.feels} |
            <br/> | {garden.attributes.date} |  
            <button onClick={() => this.vote(garden.id)}>Vote  Up {this.state[garden.id] ? this.state[garden.id] : 0}</button>
            <br/>
            <button onClick={() => this.votedown(garden.id)}>Vote Down {this.state[garden.id] ? this.state[garden.id] : 0}</button>      
          </ul> )}
    </div>
    )
  }
}

 ///stateless///

 export default connect(null)(Gardens)

// functional component we have to pass the arguments in as a arguement 

// basically a function 
