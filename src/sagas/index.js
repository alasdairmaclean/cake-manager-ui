import { call, put, takeLatest, all } from 'redux-saga/effects'
import { GET_CAKES, getCakes, getCakesSuccess, getCakesFailed, ADD_CAKE, addCakeSuccess, addCakeFailed } from '../actions'

export function* getCakesSaga(action) {
   try {
      const response = yield call(fetch, 'http://localhost:8282/cakes')
      if(!response.ok) {
        yield yield put(getCakesFailed())
      } else {
        const payload = yield response.json()
        yield put(getCakesSuccess(payload))
      }
   } catch (e) {
      yield put(getCakesFailed({message: e.message}))
   }
}

export function* addCakeSaga(action) {
   try {
      const response = yield call(fetch, 'http://localhost:8282/cakes', {
        method : 'POST',
        body: JSON.stringify(action.cake),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const payload = yield response.json()
      if(!response.ok) {
        yield put(addCakeFailed(payload))
      } else {
        yield put(addCakeSuccess(payload))
        yield put(getCakes())
      }
   } catch (e) {
      yield put(addCakeFailed([{message: e.message}]))
   }
}

function* cakesSaga() {
  yield all(
    yield takeLatest(GET_CAKES, getCakesSaga),
    yield takeLatest(ADD_CAKE, addCakeSaga)
  )

}

export default cakesSaga
