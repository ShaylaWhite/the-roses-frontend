import React, { Component } from 'react'
import RoseInput from '../components/RoseInput'
import Roses from '../components/Roses'
import Rose from '../components/Rose'
import {fetchRoses} from '../actions/fetchRoses'
import {connect} from 'react-redux'



//A container does data fetching and then renders its corresponding sub-component. That’s it.
//Provide the data and behavior 
//Are often stateful, as they tend to serve as data sources.
// “lifecycle methods” that you can override to run code at particular times in the process.
//componentDidMount() is a hook that gets invoked right after a React component has been mounted aka after the first render() lifecycle.
// All React components must act like pure functions with respect to their props.
//props are received in React's class component via the this instance of the class
//this specfic instance created 
//In a functional stateless component, the props are received in the function signature as arguments:
// You can pass data in React by defining custom HTML attributes to which you assign your data with JSX syntax


class RosesContainer extends Component {
 componentDidMount() {
   
  this.props.fetchRoses(this.props.garden.id)
 }
   

  render() {
    console.log(this.props)
    return (
      <div>
          <RoseInput garden={this.props.garden}/><br/> 
          <hr/>
          <Rose rose={this.props.rose}/>
          <Roses roses={this.props.roses} gardenId={this.props.garden.id}  />
          {/* //gives the child the props so it can use it  */}
          {/* custom HTML attributes to which you assign your data with JSX syntax. */}
      </div>

    )

  }

}

const mapStateToProps = state => {
  console.log(state)
  return {
    gardens: state.gardens,
     roses: state.roses
  }

  // Your mapStateToProps function should return a plain object that contains the data the component needs:



}


export default connect(mapStateToProps,{fetchRoses})(RosesContainer)

//It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.

//The mapStateToProps and mapDispatchToProps deals with your Redux store’s state and dispatch, respectively. state and dispatch will be supplied to your mapStateToProps or mapDispatchToProps functions as the first argument.
// It is called every time the store state changes.
// It receives the entire store state, and should return an object of data this component needs.

// connect can accept an argument called mapDispatchToProps, which lets you create functions that dispatch when called, and pass those functions as props to your component.