import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {

  return (
    <div>
          <Link to='/'>Home </Link>
-
      <Link to='/gardens'> Gardens  </Link> -
      <Link to='/gardens/new'> New Garden</Link>


    </div>

  )
}

export default NavBar