import React from 'react'
import {Route, Link} from 'react-router-dom'
import Garden from './Garden'

const Gardens = (props) => {

return (

    <div>
    {props.gardens.map(garden =>
      <li key={garden.id}>
        <Link to={`/gardens/${garden.id}`}>{garden.name}</Link>
      </li> )}
  </div>

)

    }

    export default Gardens

