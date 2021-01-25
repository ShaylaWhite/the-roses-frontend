import React from 'react'
import {Route, Link, Redirect } from 'react-router-dom';


const Rose = (props) => {

  return (
    <div>
      {props.rose.petals} - {props.rose.thorns}- {props.rose.water}
    </div>

  )
}

export default Rose