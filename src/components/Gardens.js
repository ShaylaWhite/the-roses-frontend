import React from 'react'

const Gardens = (props) => {

return (

    <div>
        {props.gardens.map(garden => <li key={garden.id}> {garden.name} - {garden.name} </li> )}
    </div>

    )

} 

export default Gardens 

//props information passed from the garden container  to the child component of gardens 