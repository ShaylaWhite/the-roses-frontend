import React from 'react'
import Garden from './Garden'

const Garden = (props) => {

   let garden = props.gardens[props.match.params.id - 1]




    return {
    <div>
        {props.gardens.map(garden => 
        <ol key={garden.id}><Garden /></ol>)} 
    </div>

)
}

export default Gardens