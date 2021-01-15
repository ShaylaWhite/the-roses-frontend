import React from 'react'
import {connect} from 'react-redux'
import {deleteRose} from '../actions/deleteRose'

class Roses extends React.Component {

state = {}

 handleDelete = (rose) => {
    this.props.deleteRose(rose.id, rose.garden_id)
  }


render() {
  return (
      <div>
        {this.props.roses && this.props.roses.map(rose =>
          <li key={rose.id}>{rose.petals} - {rose.thorns} - {rose.water} <button onClick={() => this.handleDelete(rose)}>Delete</button></li>
        )}
      </div>
    )
  }
}

export default connect(null, {deleteRose})(Roses)