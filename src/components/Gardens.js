import React from 'react'
import { Link } from 'react-router-dom'


const Gardens = (props) => {

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

 ///stateless///

export default Gardens

// functional component we have to pass the arguments in as a arguement 

// basically a function 
