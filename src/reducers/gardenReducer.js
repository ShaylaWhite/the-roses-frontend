export default function gardenReducer(state = {gardens: []}, action) {
  switch(action.type) {
      case 'FETCH_GARDENS':
          return {gardens: action.payload.data}
          case 'ADD_GARDEN':
            return {...state, gardens: [...state.gardens, action.payload]}

            case 'ADD_ROSE':
      
           return{...state, rose: [action.payload.data]}
        
            case 'DELETE_ROSE':
              let gardenstwo = state.gardens.map(garden => {
                if (garden.id === action.payload.id ) {
                  return action.payload
                } else {
                  return garden
                }
              })
              return {...state, gardens: gardenstwo}
  
      default:
        return state
  }

}