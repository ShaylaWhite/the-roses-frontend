import React from 'react'

import RosesContainer from '../containers/RosesContainer'

const Garden = (props) => {
    console.log(props)

    let garden = (props.gardens) ? (props.gardens[props.match.params.id - 1]) : null;


    return (

        <div>
    
      <h1>
        Garden : {garden ? garden.attributes.name : null} <br/>  
      </h1>

      <h3>
    posted on |{garden ? garden.attributes.date : null} |
       </h3>
       
       {garden ? <RosesContainer garden={garden}/> : null }
     
    </div>
    
    )

}


 ///stateless///parent 
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