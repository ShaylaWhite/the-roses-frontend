export default function gardenReducer(state = {gardens: []}, action) {

    switch (action.type) {
        case 'FETCH_GARDENS':
            return {gardens: action.payload}
            case 'ADD_GARDEN':
                return {...state, gardens: [...state.gardens, action.payload]}
            case 'ADD_ROSE':
                let gardens = state.gardens.map(garden => {
                    if (garden.id === action.payload.id) {
                      return action.payload
                    } else {
                      return garden
                    }
                  }) 
                  return {...state, gardens: gardens}

            default:
                return state

    }
}

// returns new verison of the state goes into the array that come back from the fetch request