export const addRose = (rose, gardenID) => {
  return (dispatch) => {
      fetch(`http://localhost:3000/api/v1/gardens/${gardenID}/roses`, {
          method: 'POST',
          body: JSON.stringify(rose),
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }
      })
      .then(res => res.json())
      .then(garden => dispatch({
          type: "ADD_ROSE",
          payload: garden
      }))
  }
} 

//connect 2 arguements 

//mapsstatetoprops actions through connect

//sends to the reducer based on action type and convrted reable json data is added into the payload 