import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/gardens' style={{paddingRight: '10px'}}> Gardens  </Link>
      <Link to='/gardens/new'> New Garden</Link>


    </div>

  )
}

export default NavBar