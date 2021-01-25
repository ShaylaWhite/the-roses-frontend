import React from 'react'
import Garden from './Garden'
import {Route, Link} from 'react-router-dom'


const Gardens = (props) => {
debugger

         return (
    <div>
      {props.gardens.map(garden =>
        <li key={garden.id}>
          <Link to={`/gardens/${garden.id}`}>{garden.name} - {garden.date} - {garden.feels} </Link>
        </li> )}
    </div>

  )
}

export default Gardens

// functional component we have to pass the arguments in as a arguement 

// basically a function 
