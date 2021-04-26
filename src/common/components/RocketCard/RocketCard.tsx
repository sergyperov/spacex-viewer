import { SuccessRateBadge } from '@common/components/SuccessRateBadge/SuccessRateBadge'
import { AppState } from '@store/store'
import { connect } from 'react-redux'
import styles from './RocketCard.module.scss'
import { RocketThumbnail } from '@common/components/RocketThumbnail/RocketThumbnail'

/**
 * RockerCard component that has some basic information about the rocket
 */

export interface IRocketCardProps {
  name: string
  successRate: number
  firstFlightDate: string
  thumbnailImageSrc: string
}

const RocketCard: React.FC<IRocketCardProps> = (props) => {
  return (
    <div className={styles.rocketCard}>
      <h3 className={styles.heading}>
        <span className={styles.title}>{props.name}</span>
        <SuccessRateBadge successRate={props.successRate} />
      </h3>
      <RocketThumbnail
        className={styles.thumbnailWrapper}
        thumbnailImageSrc={props.thumbnailImageSrc}
        rocketName={props.name}
      />
      <span className={styles.firstFlight}>
        First flight: {props.firstFlightDate}
      </span>
    </div>
  )
}

interface IRocketCardContainerProps {
  rocketId: string
}

type MapStateToProps = (
  state: AppState,
  ownProps: IRocketCardContainerProps
) => IRocketCardProps

const mapStateToProps: MapStateToProps = (state, ownProps) => {
  const rocket = state.rockets.data.entities.rockets[ownProps.rocketId]
  return {
    name: rocket.name || '',
    successRate: rocket.success_rate_pct || 0,
    firstFlightDate: rocket.first_flight || '',
    thumbnailImageSrc: (rocket.flickr_images && rocket.flickr_images[0]) || '',
  }
}

export default connect(mapStateToProps)(RocketCard)
