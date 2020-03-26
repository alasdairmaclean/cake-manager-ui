export const GET_CAKES = 'GET_CAKES'
export const getCakes = () => ({
  type: GET_CAKES
})

export const GET_CAKES_SUCCESS = 'GET_CAKES_SUCCESS'
export const getCakesSuccess = cakes => ({
  type: GET_CAKES_SUCCESS,
  cakes
})

export const GET_CAKES_FAILED = 'GET_CAKES_FAILED'
export const getCakesFailed = (error) => ({
  type: GET_CAKES_FAILED,
  error
})

export const ADD_CAKE = 'ADD_CAKE'
export const addCake = cake => ({
  type: ADD_CAKE,
  cake
})

export const ADD_CAKE_SUCCESS = 'ADD_CAKE_SUCCESS'
export const addCakeSuccess = cake => ({
  type: ADD_CAKE_SUCCESS,
  cake
})

export const ADD_CAKE_FAILED = 'ADD_CAKE_FAILED'
export const addCakeFailed = errors => ({
  type: ADD_CAKE_FAILED,
  errors
})
