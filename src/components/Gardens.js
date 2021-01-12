import React from 'react'

const Gardens = (props) => {

return (

    <div>
        {props.gardens.map(garden => <ol key={garden.id}> 
        <h4> | The Garden | <br/> <br/> {garden.name} </h4>
        posted on {garden.date}</ol> )}
    
    </div>

    )

} 

export default Gardens 

//props information passed from the garden container  to the child component of gardens 