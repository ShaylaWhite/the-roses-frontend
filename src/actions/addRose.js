export const addRose = (rose, gardenId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/gardens/${gardenId}/roses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rose)
    })
    .then(response => response.json())
    .then(garden => {
        if (garden.error) {
          alert(garden.error)
        } else {
          dispatch({type: 'ADD_ROSE', payload: garden})
        }
      }
    )
  }
}