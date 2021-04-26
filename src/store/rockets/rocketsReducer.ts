import {
  newRocketsLoaded,
  newRocketsLoadStarted,
  RocketsAction,
  RocketsActionTypes,
  RocketsLoadingStatus,
} from './rocketsActions'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import * as API from '@common/api/rockets'
import { INormalizedRocketsData, normalizeRockets } from './normalizedData'
import * as _ from 'lodash'
import { AppState } from '@store/store'

export type ExtraArg = undefined
export type RocketsThunkResult<R> = ThunkAction<R, AppState, ExtraArg, Action>
export type RocketsThunkDispatch = ThunkDispatch<AppState, ExtraArg, Action>

export interface RocketsState {
  readonly data: INormalizedRocketsData
  readonly loadingStatus: RocketsLoadingStatus
}

const initialRocketsState = {
  data: normalizeRockets([]),
  loadingStatus: RocketsLoadingStatus.INITIAL,
}

/**
 * Rockets Reducer
 */
export default function reducer(
  state: RocketsState = initialRocketsState,
  action: RocketsAction
): RocketsState {
  if (action.type === RocketsActionTypes.NEW_ROCKETS_LOADED) {
    const appended = Object.values(state.data.entities.rockets || []).concat(
      action.payload.rockets
    )

    return {
      ...state,
      data: normalizeRockets(_.uniqBy(appended, (el) => el.id)),
      loadingStatus: RocketsLoadingStatus.LOADED,
    }
  } else if (action.type === RocketsActionTypes.NEW_ROCKETS_LOAD_STARTED) {
    return {
      ...state,
      loadingStatus: RocketsLoadingStatus.LOADING,
    }
  }

  return state
}

// Side-Effects (Thunk Actions)
export function loadRockets(): RocketsThunkResult<Promise<void>> {
  return function (dispatch: RocketsThunkDispatch, getState) {
    const { rockets } = getState()
    if (rockets.data.result.length) {
      return Promise.resolve()
    }

    dispatch(newRocketsLoadStarted())
    return API.getRockets().then((rockets) => {
      dispatch(newRocketsLoaded(rockets))
    })
  }
}
