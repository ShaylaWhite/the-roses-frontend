import React from 'react'
import {Route, Link} from 'react-router-dom'
import Garden from './Garden'

const Gardens = (props) => {

return (

    <div>
    {props.gardens.map(garden =>
      <li key={garden.id}>
        <Link to={`/gardens/${garden.id}`}>{garden.name} - {garden.feels}  </Link>
         <br/>
         {garden.date} 
      </li> )}
  </div>

)

export default Gardens 

//props information passed from the garden container  to the child component of gardens 