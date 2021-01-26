import React from 'react'
import Garden from './Garden'
import {Route, Link} from 'react-router-dom'


const Gardens = (props) => {
let gardens = props.gardens

         return (
    <div>
      {props.gardens.map(garden =>
        <ul key={garden.id}>
           Garden  <Link to={`/gardens/${garden.attributes.id}`}>{garden.attributes.name} </Link>
            <br/> Feels for the day: | {garden.attributes.feels} |
            <br/> | {garden.attributes.date} |  
        </ul> )}
    </div>
  )
}

export default Gardens

// functional component we have to pass the arguments in as a arguement 

// basically a function 
