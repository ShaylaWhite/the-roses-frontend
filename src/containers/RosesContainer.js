import React from 'react'
import RoseInput from '../components/RoseInput'
import Roses from '../components/Roses'

class RosesContainer extends React.Component {


  render() {
    return (
      <div>
          <RoseInput garden={this.props.garden}/><br/>
          <Roses roses={this.props.garden && this.props.garden.roses}/>
      </div>

    )

  }

}

export default RosesContainer 