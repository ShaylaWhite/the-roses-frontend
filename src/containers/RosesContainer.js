import React from 'react'
import RoseInput from '../components/RoseInput'
import Rose from '../components/Rose'

class RosesContainer extends React.Component {

  render() {
    return (
      <div>
          <RoseInput garden={this.props.garden}/><br/>
          <Rose rose={this.props.rose}/>
      </div>

    )

  }

}

export default RosesContainer