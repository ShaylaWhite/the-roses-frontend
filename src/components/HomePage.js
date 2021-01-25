import React from 'react';
import { Link } from 'react-router-dom'


const HomePage = (props) => {

  
    return (

    <h1>
      Welcome to Garden of Roses
      <br/>
      Your daily check in with yourself, because you matter!
      <Link to="/gardens"> View Collection</Link>

    </h1>

)
}



export default HomePage