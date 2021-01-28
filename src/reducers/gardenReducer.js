export default function gardenReducer(state = {gardens: []}, action) {
  //connect redux ]    [If state is not given] object with an array{} 
  switch(action.type) {
      case 'FETCH_GARDENS':
          return {gardens: action.payload.data}
          case 'ADD_GARDEN':
            return {...state, gardens: [...state.gardens, action.payload]}

            case 'ADD_ROSE':
      
              return{...state, rose: [action.payload.data]}
              //object key & pairs 

              case 'FETCH_ROSES':
          
                return {...state, roses: action.payload.data}

            case 'DELETE_ROSE':
              let gardenstwo = state.gardens.map(garden => {
                if (garden.id === action.payload.id ) {
                  return action.payload.data
                } else {
                  return garden
                }
              })
              return {...state, gardens: gardenstwo}
  
      default:
        return state
  }

}

// const contactReducer = (state = initialState, action) => {
//   // Do something
// }

//garden reducer is passed into the store to keep the store up to date on that status of state. 
// Action -> Reducer -> New State.


// pass into two agruements state inital  state/ action
// action determines what type of action to use

// check the action type based on the case

// returns the action.payload 

//action payload value is the data from the user determines the kind of update we’re dealing with, based on the value of the action.type

// default return the state .