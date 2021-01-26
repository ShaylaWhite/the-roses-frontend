import React from 'react'
import {Redirect} from 'react-router-dom'

import RosesContainer from '../containers/RosesContainer'

const Garden = (props) => {
    console.log(props)

  let garden = props.gardens[props.match.params.id - 1]

    console.log(garden) 
    return (
        <div>
    
      <h1>
        Garden : {garden ? garden.attributes.name : null} <br/>  
      </h1>

      <h3>
    posted on |{garden ? garden.attributes.date : null} |
       </h3>
       
      <RosesContainer garden={garden}/><br/>
     
    </div>
    
    )

}


 
export default Garden



// const Garden = (props) => {
// let garden = props
// console.log(props.garden.attributes)
//     return (
//       <div>
//           <Link to={`/garden/${garden.id}`}>{garden.name} - ${garden.date}</Link>

     
//         </div>
    
//     )
// }