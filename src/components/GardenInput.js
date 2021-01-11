import React from 'react'

class GardenInput extends React.Component {

    state = {
        name: '', 
        feels: '',
         date: ''
        }

        handleChange = (event) => {
            this.setState({
              [event.target.name]: event.target.value
            })
          }

    render() {
        return (
            <div>
                <form>
                    <label>Name Your Garden:</label>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <label>How Was Your Day?</label>
                    <input type='text' placeholder='Today Feels' value={this.state.feels} name="feels" onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <label>Date</label>
                    <input type='date' placeholder='Date' value={this.state.date} name="date" onChange={this.handleChange}/>
                </form>
            </div>
        )
    }


}

export default GardenInput