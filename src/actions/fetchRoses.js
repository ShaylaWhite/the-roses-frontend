export function fetchRoses(gardenID) { 
    return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/gardens/${gardenID}/roses`)
    .then(resp => resp.json())
    .then(roses => dispatch({
       type: 'FETCH_ROSES', 
       payload: roses
    }))
  }
}