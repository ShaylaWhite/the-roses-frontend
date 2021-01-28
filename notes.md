<!-- State -->

-set initial state
-setState() --sets/updates state!

<!-- Async -->

\\\\When we execute setState(), it is non-blocking. It fires off a message to the React component's inner workings saying: "Hey, you need to update state to this value when you have a chance." The component finishes doing its current task before updating the state\\\\\



React intentionally “waits” until all components call setState() in their event handlers before starting to re-render. This boosts performance by avoiding unnecessary re-renders.

However, you might still be wondering why React doesn’t just update this.state immediately without re-rendering.

The reason is this would break the consistency between props and state, causing issues that are very hard to debug.

[FIXES]


\\Option 1: Using callback function with setState\\

this.setState({
   value: newValue
},()=>{
   // It is an callback function.
   // Here you can access the update value
   console.log(this.state.value)
})

\\Option 2: using componentDidUpdate This function will be called whenever the state of that particular class changes.\\

componentDidUpdate(prevProps, prevState){
    //Here you can check if value of your desired variable is same or not.
    if(this.state.value !== prevState.value){
        // this part will execute if your desired variable updates
    }
}


<!-- PROPS -->

Props are used to pass information down the component tree, from parents to children.

<!-- CALLBACK -->

This allows the callback to be owned by a different component than the one invoking it. Once invoked, the callback can effect change in the component that owns it, instead of the component that called it.


<!-- SYNTHETIC EVENT -->

event handelers 
We attach event handlers to an element 

By using an arrow function, we avoid creating a new scope with a different value of this

To recap: Using setState, we can update a component's state. We frequently use events to trigger these updates. setState is called asynchronously and merges the existing state with whatever object is passed in. We can also pass a function to setState, which allows us to write state changes that are based on the existing state values.


<!-- React Component Lifecycle Overview -->

React cpmpoannents have two sets of propoerties: props and state.

--> props are given to the component by its a parent.
--> props external
--> companents state is interanl 

<!-- A component's state can change in conjunction to the props changing or when the user interacts with the component. -->

CREATION
UPDATING
DELETION 

LIFECYCLE HOOKS OR LIFECYCLE METHODS 

 <!-- lifecycle methods, because they are called at different times in the component's lifecycle - just before it's created, after it's created, and when it's about to be deleted. -->


\\\\\\\\\\\\\\\\ CLASS COMPONENTS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
import React, { Component } from 'react'
 
class App extends Component {
  render() {
    return <div></div>
  }
}
 
export default App


\\\\\\\\\\\\\\\\ FUNCTIONAL COMPONENTS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

A functional component returns JSX, instead of using a render method.

import React from 'react'
 
const App = props => {
  return (
    <div>{props.greeting}</div>
  )
}
 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
export default App

import React from 'react'
 
const App = props => <div>{props.greeting}</div>
 
export default App

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 Class components are versatile and fully featured components. They can be anything we want them to be. Functional components exchange the class component's bells and whistles for simplicity and a small performance boost.
 \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


 presentational components don't manage state, container components do.

 frgaments reduce DOM BLOAT 

 In React, Webpack manages pesky dependency loading for us by pre-digesting our many files' code and outputting a single 'bundle', which contains all of our code, with dependencies properly placed, in one file.

  <!-- Declarative programming allows us to focus on what our React application should look like  -->

  \\\\\\\\\\\\\\\\\\\\\\\DOM\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
   DOM is: a programmatic representation of the document we see in the browser

   In React, we know that we write components that return JSX elements. These JSX elements represent DOM elements, and when rendered, become those elements on a webpage.


///REDUX ACTION//


action that tells Redux how to incorporate the update into the state. 

\\\Any time we update the state in Redux, we must create an action first. 
\\\These actions are also made available to components. 

\\\\Redux places all of our data in one place -- the state. This state is just a plain JavaScript object. 


function changeState(state, action) {
  if (action.type === 'INCREASE_COUNT') {
    return {count: state.count + 1 }
  }
}

REDUX REDUCERS 

an initial rendering of the state, and the ability to set our initial state in our reducer. We set our initial state in our reducer by using a default argument for the state parameter. Because state is not initially defined, dispatching an action assigns our state to that default value, and then sets state as the default.


Action -> Reducer -> New State.


a function, createStore(), that, when invoked, returns an instance of the Redux store for us
mport createStore() in our src/index.js


 pass store down through App



\\\\\\\\\\ STORE ACCESS\\\\\\\\\

FUNCTION PROVIDED BY react-redux , connect

MODIFY a componnet export statemnt to inclued connect

REDUX STORE --> COMPONENTS PROPS 

createStore() redux library provides this method
write the reducer   --->
                        tells the store what the new stat to give the actions

\\\\\\\\\\\\\\\\\\\\\\\   React Redux  \\\\\\\\\\\\\\\\\\\\\

react-redux librbary to get React & Redux talking 
--gives access to the component Provider
<provider>
<app>
</provider>


Provider ensures that our entire React application can potentially access data from the store. 


Then connect(), allows us to specify which data we are listening to (through mapStateToProps), and which component we are providing the data



//reducer 

//A reducer is a function that determines changes to an application’s state. It uses the action it receives to determine this change
initial state + action = new state

