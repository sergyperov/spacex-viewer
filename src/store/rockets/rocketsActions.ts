import { PayloadAction } from '@reduxjs/toolkit'
import { Action } from 'redux'
import { RocketsAPISchema } from '../../../types/schemas/rockets'

export enum RocketsActionTypes {
  NEW_ROCKETS_LOADED = 'NEW_ROCKETS_LOADED',
  NEW_ROCKETS_LOAD_STARTED = 'NEW_ROCKETS_LOAD_STARTED',
}

export enum RocketsLoadingStatus {
  INITIAL = 'INITIAL',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
}

export interface INewRocketsPayload {
  rockets: RocketsAPISchema[]
}

// Actions
export type NewRocketsLoadedAction = PayloadAction<
  INewRocketsPayload,
  RocketsActionTypes.NEW_ROCKETS_LOADED
>

export type NewRocketsLoadStartedAction = Action<
  RocketsActionTypes.NEW_ROCKETS_LOAD_STARTED
>

export type RocketsAction = NewRocketsLoadedAction | NewRocketsLoadStartedAction

// Action Creators
export const newRocketsLoaded: (
  rocketsToAdd: RocketsAPISchema[]
) => NewRocketsLoadedAction = (rocketsToAdd: RocketsAPISchema[]) => ({
  type: RocketsActionTypes.NEW_ROCKETS_LOADED,
  payload: {
    rockets: rocketsToAdd,
  },
})

export const newRocketsLoadStarted: () => NewRocketsLoadStartedAction = () => ({
  type: RocketsActionTypes.NEW_ROCKETS_LOAD_STARTED,
})
