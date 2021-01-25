import React from 'react'
import {connect} from 'react-redux'
import {deleteRose} from '../actions/deleteRose'

const Roses = (props) => {


 const handleDelete = (rose) => {
    props.deleteRose(rose.id, rose.garden_id)
  }


  
  return (
    <div>
        {props.roses && props.roses.map(rose => 
          <h4 key={rose.id}> {rose.petals}  
          <br/>

           {rose.thorns}   -    {rose.water}   - 

          <br/>
         <button  onClick={() => handleDelete(rose)}>Delete</button><hr/></h4>)}
    </div>
)
}

export default connect(null, {deleteRose})(Roses)