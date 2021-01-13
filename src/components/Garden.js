import React from 'react'

import {Redirect} from 'react-router-dom'
import GardensContainer from '../containers/GardensContainer'

const Garden = (props) => {
   

 let garden = props.gardens[props.match.params.id - 1]
  
  // let garden = props.gardens.filter(garden => garden.id === props.match.params.id)[0]



  console.log(garden)

  return (
      <div>
          <h2>
              {garden ? garden.name : null} - {garden ? garden.feels :null}
          </h2>
          <GardensContainer garden={garden}/>
      </div>

  )
}
export default Garden