import React from 'react'
import Garden from './Garden'

const Gardens = (props) => {

    return {
    <div>
        {props.gardens.map(garden => 
        <ol key={garden.id}><Garden /></ol>)} 
    </div>

)
}

export default Gardens