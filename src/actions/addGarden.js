export const addGarden = (data) => {

return (dispatch) => {
    fetch('http://localhost:3000/api/v1/gardens', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(garden => dispatch({type: 'ADD_GARDEN', payload: garden}))
  }

}

// return the dispatch allowed by thunk
//send to the creat method viz fetch 
//pass in 2nd a object -> sending to backend type 
//post 
//strigny makes it readable for the backend 