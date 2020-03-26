import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()

import { runSaga } from 'redux-saga'

import { getCakesSaga, addCakeSaga }  from './index'
import { getCakes, getCakesSuccess, getCakesFailed, addCake, addCakeSuccess, addCakeFailed } from '../actions'

const state = {
      cakes: {
        cakes: [{
          cakeId: 1,
          title: 'Lemon Cheesecake',
          description: 'A cake made of lemons',
          image: 'http://example.com/image.jpg'
        }],
        getCakesError: true,
        addCakeErrors: [{
          field: 'title',
          message: 'length must be between 1 and 100'
        }]
      }
    }

describe('cakes sagas', () => {

  var dispatched = []

   beforeEach(() => {
       dispatched = []
       fetch.resetMocks()
    })

  it('should get cakes when call successful', async () => {
    const cakes = [{title:'test-title'}]
    fetchMock.mockResponse(JSON.stringify(cakes))
    await runTestSaga(getCakesSaga, getCakes())

    const expected = [getCakesSuccess(cakes)]
    expect(dispatched).toEqual(expected)
  })

  it('should get cakes when call fails', async () => {
    const cakes = [{title:'test-title'}]
    fetchMock.mockResponse(null, { status: 400 })
    await runTestSaga(getCakesSaga, getCakes())

    const expected = [getCakesFailed()]
    expect(dispatched).toEqual(expected)
  })

  it('should add cake when call successful', async () => {
    const cake = {
                   title: 'Lemon Cheesecake',
                   description: 'A cake made of lemons',
                   image: 'http://example.com/image.jpg'
                 }
    fetchMock.mockResponse(JSON.stringify(cake))
    await runTestSaga(addCakeSaga, addCake(cake))

    const expected = [addCakeSuccess(cake), getCakes()]
    expect(dispatched.length).toEqual(expected.length)
    expect(dispatched[0]).toEqual(expected[0])
    expect(dispatched[1]).toEqual(expected[1])
  })

  it('should return errors when add cake call fails', async () => {
  const cake = {
                 title: 'Lemon Cheesecake',
                 description: 'A cake made of lemons',
                 image: 'http://example.com/image.jpg'
               }
    const errors = [{
                     field: 'title',
                     message: 'length must be between 1 and 100'
                   }]
    fetchMock.mockResponse(JSON.stringify(errors), { status: 400 })
    await runTestSaga(addCakeSaga, addCake(cake))

    const expected = [addCakeFailed(errors)]
    expect(dispatched.length).toEqual(expected.length)
    expect(dispatched[0]).toEqual(expected[0])
  })

   const runTestSaga = (saga, action) => {
     return runSaga({
           dispatch: (dispatchedAction) => dispatched.push(dispatchedAction),
           getState: () => ({}),
       }, saga, action).toPromise()
   }

})


