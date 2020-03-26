import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import cakesSaga from './sagas'
import { getCakes } from './actions'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer,
                           composeEnhancers(applyMiddleware(sagaMiddleware)),
                         )
sagaMiddleware.run(cakesSaga)

store.dispatch(getCakes())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
