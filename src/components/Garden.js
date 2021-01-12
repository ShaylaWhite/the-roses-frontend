import React from 'react'

import {Redirect} from 'react-router-dom'


const Garden = (props) => {
   
    console.log(props)

  let garden = props.gardens[props.match.params.id - 1]
  console.log(garden)

  return (

    <li>
        {garden ? null : <Redirect to='/gardens/>'}
        {account ? account.name : null} - {account ? account.balance : null}
    </li>
 
    )


}

export default Garden