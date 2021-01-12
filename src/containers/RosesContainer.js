import React from 'react'
import RoseInput from '../components/RoseInput'
import Roses from '../components/Roses'

class RosesContainer extends React.Component {


  render() {
    return (
      <div>
          <RoseInput garden={this.props.garden}/><br/>
          <Roses Roses={this.props.garden && this.props.garden.Roses}/>
      </div>

    )

  }

}

export default RosesContainer