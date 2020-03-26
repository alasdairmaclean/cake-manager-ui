import cakesReducer from './cakes'
import { getCakesSuccess, getCakesFailed, addCakeSuccess, addCakeFailed } from '../actions'

describe('cakes reducer', () => {
  it('handles GET_CAKES_SUCCESS action', () => {
    const cakes = [{ title: 'test-title'}]
    const newState = cakesReducer(null, getCakesSuccess(cakes))
    expect(newState.cakes).toEqual(cakes)
  })

  it('handles GET_CAKES_FAILED action', () => {
    const newState = cakesReducer(null, getCakesFailed())
    expect(newState.getCakesError).toEqual(true)
  })

  it('handles ADD_CAKE_SUCCESS action', () => {
    const newState = cakesReducer({ addCakeErrors: [{message: 'test-message'}]}, addCakeSuccess())
    expect(newState.addCakeErrors).toEqual([])
  })

  it('handles ADD_CAKE_FAILED action', () => {
    const errors = [{message: 'test-message'}]
    const newState = cakesReducer(null, addCakeFailed(errors))
    expect(newState.addCakeErrors).toEqual(errors)
  })

})
