/**
 * Basic API Handlers for SpaceX
 */
import { RocketsAPISchema } from '../../../types/schemas/rockets'

export function getRockets(): Promise<RocketsAPISchema[]> {
  return fetch('https://api.spacexdata.com/v4/rockets').then((res) =>
    res.json()
  )
}

export function getRocket(rocketId: string): Promise<RocketsAPISchema> {
  return fetch(
    `https://api.spacexdata.com/v4/rockets/${rocketId}`
  ).then((res) => res.json())
}
