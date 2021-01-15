import React from 'react'
import {Redirect} from 'react-router-dom'

import RosesContainer from '../containers/RosesContainer'

const Garden = (props) => {


    console.log(props)
    // let garden = props.gardens[props.match.params.id - 1]
    let garden = props.gardens.filter(garden => garden.id == props.match.params.id)[0]
  
    console.log(garden)
   


    return (
        <div>
       <h1>
        {garden ? garden.name : null} - {garden ? garden.feels : null} - {garden ? garden.date : null}
        </h1>
        <RosesContainer garden={garden}/>

        </div>
 
    )
}


export default Garden