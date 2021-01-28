The code should be written in ES6 as much as possible [\]


Use the create-react-app generator to start your project [\]



Follow the instructions on this repo to setup the generator: create-react-app [\]


Your app should have one HTML page to render your react-redux application 
[\] index.html

There should be 5 stateless components

[\]
[\]
[\]
[\]
[\]

\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Class Component also known as Stateful 
component
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

[ stateful ]

For state management you can use class componen

\\components are keeping track of changing data

\\where state is set

\\needed somewher state usually changes

\\ have the parent component keep all the information pass it down to its childern stateless components 

extends component class form react
implement logic and state
render() method returning html
pass in props ann d access them with this.props

import React, { Component } from “react”;

class Person extends Component {

Presentational vs Container Components (~outdated concepts~)

Presentational = concerned with how things look
often functional components (unless they need state, lifecycle hooks, etc.)
Receive data and callbacks exclusively via props

Container = concerned with how things work
often stateful because it serves as a data source (e.g. may fetch data to pass down as props)


Destructive functions mutate the original collection/array


\\\\\\\\\\\\\\\\
Functional Components also known as Stateless component
 \\\\\\\\\\\\\\\\

[ stateless ]

\\\ All the children components have to worry about is receiving the information as props properly 

It is also called “stateless” components because they simply accept data and display them in some form that is they are mainly responsible for rendering UI.

It accept properties(props) in function and return html(JSX)

It gives solution without using state

There is no render method used in functional components.

\\\not arrow\\
funstion Stateless(props) {
  return (
    <div>
    <div>
  )
}

const StatelessComponent = (props) => (
  <div>
  </div>
)

export default StatelssComponent;


functional stateless components cannot use setState() method 

What are components \\\\\\\\\\\\\\\\\

\\\ components  print out what is given to them via props & always renders the same thing


\\->a component represent the part of user interface
\\->component are reusable and can be use in anywhere in user interface


There should be 3 routes 
[\]
[\]
[\]


The Application must make use of react-router and proper RESTful routing (should you choose to use react-router v3 please refer to the appropriate docs; docs for v4 can be found here) 
[\]


Use Redux middleware to respond to and modify state change
[\]

Make use of async actions and redux-thunk middleware to send data to and receive data from a server 
[\]

Your Rails API should handle the data persistence with a database. You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods.
[\]


Your client-side application should handle the display of data with minimal data manipulation 
[\]

Your application should have some minimal styling: feel free to stick to a framework (like react-bootstrap), but if you want to write (additional) CSS yourself, go for it!

[\]Components accepts a single "props" AKA          prpoerties and returns a React elemnt 


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
             \\[STATE]\\

  in component state is data we import

  What state actually is — data we hold that we’re aware is subject to change

            
            




\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
Components 

\\\Function Component\\
function Welcome(props) {

}

\\\E6S class Components\\
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

\\\\Component Process\\\\\
ReactDOM.render()
React Calls Component(props)
Component returnes element
Updates the React DOM



\\\\\\\\\Import\\\\\\\\\\\\\\\\\\\


 import React, {Component} from 'react' 

class Pigeons extends Component { 

}

 \\\\\bring in this react Component from react'

 now extend the component to include.\\\\\\\

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

LifeCycle Method or Lifecycle hooks in Class Component

[4 Phases]

1. Mounting 

when an instance of a component is being created and inserted into the DOM
it has 4 method constructor(),static getDerivedStateFromProps(),render() and componentDidMount()

\\\constructor(props)\\\\

->a special function that will get called whenever a new component is created
->initializing the state binding the event handler
->super(props) that directly overites this.state

\\\render():\\\\
->we read props and state and return jsx

\\\componentDidMount()\\\
->invoked immediately after a component and all its children components have been redered to the DOM

componentDidMount() that would grab our data from a database

2. Updating():
when a component is being re-rendered as a result of chnage to either its props or state


3. UnMounting 
used when component is being removed from the DOM.
it has 1 lifecycle componentWillUnmount()

4. Error Handling when there is an error during rendering
it has 2 lifecycle static getDerivedStateFromProps() and componentDidCatch 


fetch() is a function that retrieves data; it is a global method on the `window` object

The steps:
you fetch() data, which returns a promise that resolves to a response
.then take the response and turn to JSON
.then you do something with the JSON data
