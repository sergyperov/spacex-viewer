import { IRocketInfoProps } from '@containers/RocketInfo/RocketInfo'
import { RocketsAPISchema } from '../../../types/schemas/rockets'

export function convertAPISchemaToProps(
  rocket: RocketsAPISchema
): IRocketInfoProps {
  return {
    name: rocket.name || '',
    description: rocket.description || '',
    imagesSrc: rocket.flickr_images || [],
    successRate: rocket.success_rate_pct || 0,
    isActive: !!rocket.active,
    firstFlightDate: rocket.first_flight || '',
    costPerLaunch: rocket.cost_per_launch || 0,
    wikipediaHref: rocket.wikipedia || '',
  }
}
