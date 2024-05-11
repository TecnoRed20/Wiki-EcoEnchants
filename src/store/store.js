import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux' //included compose
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import throttle from 'lodash/throttle'

import EnchantsReducer from './reducers/EnchantsReducer';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    console.log(err)
    return undefined
  }
}

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    // ignore errors
  }
}

const rootReducer = combineReducers({
  Enchants: EnchantsReducer,
});

const persistedState = loadState()
export const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
)

store.subscribe(throttle(() => {
  saveState({
    rootReducer: store.getState().rootReducer
  })
}, 1000))

