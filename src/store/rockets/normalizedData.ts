import { normalize, schema } from 'normalizr'
import { RocketsAPISchema } from '../../../types/schemas/rockets'

/**
 * Normalizing data in order to have more structured state
 */

const rocketSchema = new schema.Entity('rockets')

export default [rocketSchema]

export function normalizeRockets(
  rockets: RocketsAPISchema[]
): INormalizedRocketsData {
  return normalize(rockets, [rocketSchema])
}

export interface INormalizedRocketsData {
  result: string[]
  entities: {
    rockets: {
      [key: string]: RocketsAPISchema
    }
  }
}
