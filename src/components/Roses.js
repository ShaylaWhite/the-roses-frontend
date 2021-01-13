import React from 'react'
//import {Route, Link} from 'react-router-dom'
//import Garden from './Garden'

const Gardens = (props) => {

    console.log(props.roses)

return (

    <div>
    {this.props.roses && props.roses.map(rose =>
      <li key={rose.id}>{rose.petals} - {rose.thorns} - {rose.water} </li>

    )}
  </div>
)
    }

    export default Gardens