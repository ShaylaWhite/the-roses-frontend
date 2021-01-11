export function fetchGardens() { 

        return (dispatch) => {
        fetch('http://localhost:3000/api/v1/gardens')
        .then(resp => resp.json())
        .then(gardens => dispatch({
           type: 'FETCH_GARDENS', 
           payload: gardens
        }))
      }
    }