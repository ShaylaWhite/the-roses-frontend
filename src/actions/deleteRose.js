export const deleteRose = (roseId, gardenId) => {
    return (dispatch) => {
      return fetch(`http://localhost:3000/api/v1/gardens/${gardenId}/roses/${roseId}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(account => dispatch({type: 'DELETE_ROSE', payload: account}))
    }
  }