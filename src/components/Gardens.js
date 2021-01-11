import React from 'react'

const Gardens = (props) => {

return (

    <div>
        <br/>
        {props.gardens.map(garden => <li key={garden.id}>  <h1><b>{garden.name}</b> <br/></h1> - posted - {garden.date} </li> )}
        <br/>
    </div>

    )

} 

export default Gardens 

//props information passed from the garden container  to the child component of gardens 