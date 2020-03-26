import { GET_CAKES_SUCCESS, GET_CAKES_FAILED, ADD_CAKE_SUCCESS, ADD_CAKE_FAILED } from '../actions'

const startState = {
  cakes: [],
  getCakesError: false,
  addCakeErrors: []
}

const cakes = (state = startState, action) => {
  switch (action.type) {
    case GET_CAKES_SUCCESS:
      return {
        ...state,
        cakes: action.cakes,
        getCakesError: false
      }
    case GET_CAKES_FAILED:
      return {
        ...state,
        getCakesError: true
      }
    case ADD_CAKE_SUCCESS:
      return {
        ...state,
        addCakeErrors: []
      }
    case ADD_CAKE_FAILED:
      return {
        ...state,
        addCakeErrors: action.errors
      }
    default:
      return state
  }
}

export default cakes
