export default function gardenReducer(state = {gardens: []}, action) {

    switch (action.type) {
        case 'FETCH_GARDENS':
            return {gardens: action.payload}
            default:
                return state

    }
}

// returns new verison of the state goes into the array that come back from the fetch request