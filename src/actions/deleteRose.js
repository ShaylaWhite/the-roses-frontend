export const deleteRose = (roseID, gardenID ) => dispatch => {

  fetch(`http://localhost:3000/api/v1/gardens/${gardenID}/roses/${roseID}`, {
      method: 'DELETE'
  })
  .then(response => response.json())
  .then(data => dispatch({
      type: 'DELETE_ROSE',
      payload: data
  }))

  


}