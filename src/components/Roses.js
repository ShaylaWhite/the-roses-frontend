import React from 'react'
import {connect} from 'react-redux'
import { deleteRose } from '../actions/deleteRose'

const Roses = (props) => {
console.log("roses")
console.log(props)
  // state = {} 
  
  let gardenRoses = (props.roses) ? (props.roses.filter(rose => rose.attributes.garden_id == props.gardenId)) : null;
  //   [props.match.params.id - 1])) : null;
console.log(gardenRoses)
  // const handleDelete = (rose) => {
  //    props.deleteRose(rose.id, rose.garden_id)
  //  }
 
//  vote = (id) => {
//    state[id] ? setState({[id]: this.state[id] += 1}) : this.setState({[id]: 1})
//  }

   return (
     
       <div>
        {gardenRoses && gardenRoses.length > 0 && gardenRoses.map(rose =>

          <li key={rose.attributes.id}>
            {rose.attributes.petals} - {rose.attributes.thorns} - {rose.attributes.water}       
              {/* <button onClick={() => this.handleDelete(rose)}>Delete</button>  */}
        </li> 
        )}           
      </div>
    )
  }
   
 
 
 export default connect(null, {deleteRose})(Roses)