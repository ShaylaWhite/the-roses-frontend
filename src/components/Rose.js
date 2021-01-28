import React from 'react'
import { connect } from 'react-redux'

const Rose = (props) => {
console.log("rose")
  let rose;
  if (props.rose) {
     
    rose = "Your New Rose:" + props.rose[0].attributes.thorns + " - " + props.rose[0].attributes.petals + " - " +  props.rose[0].attributes.water; 

  } else {
    rose = "Please Add A New Rose to this Garden"
  }

// let attributes = {rose.petals} - {rose.thorns}- {rose.water} 
  return (
    <div>
    |{rose ? rose : null}|
     

    </div>
 

  )
  }
const mapStateToProps = state => {
    return {
    ...state,
     rose: state.rose
    }
  }



export default connect(mapStateToProps)(Rose)

// connect mapsstates/ props 