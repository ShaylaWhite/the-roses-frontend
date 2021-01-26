import React from 'react'
import {Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

const Rose = (props) => {
  let rose;
  if (props.rose) {
     
    rose = props.rose[0].attributes.thorns + " - " + props.rose[0].attributes.petals + " - " +  props.rose[0].attributes.water; 

  } else {
    rose = "joy"
  }

// let attributes = {rose.petals} - {rose.thorns}- {rose.water} 
  return (
    <div>
       {rose}
    </div>

  )
}
const mapStateToProps = state => {
    return {
     rose: state.rose
    }
  }



export default connect(mapStateToProps)(Rose)

// connect mapsstates/ props 