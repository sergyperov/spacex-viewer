import {
  createStore,
  applyMiddleware,
  combineReducers,
  AnyAction,
  Reducer,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { createWrapper, MakeStore } from 'next-redux-wrapper'

import rocketsReducer, { RocketsState } from '@store/rockets/rocketsReducer'

export interface AppState {
  rockets: RocketsState
}

const combinedReducers = combineReducers({
  rockets: rocketsReducer,
})

const reducer: Reducer<AppState, AnyAction> = (state, action) => {
  return combinedReducers(state, action)
}

// exporting redux store
const initStore: MakeStore<AppState> = () => {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}

export const storeWrapper = createWrapper(initStore)
