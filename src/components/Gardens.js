import React from 'react'
import Garden from './Garden'
import {Route, Link} from 'react-router-dom'


const Gardens = (props) => {

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
