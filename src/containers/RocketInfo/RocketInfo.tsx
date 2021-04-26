import styles from './RocketInfo.module.scss'
import { SuccessRateBadge } from '@common/components/SuccessRateBadge/SuccessRateBadge'
import { RocketThumbnail } from '@common/components/RocketThumbnail/RocketThumbnail'

export interface IRocketInfoProps {
  name: string
  description: string
  imagesSrc: string[]
  successRate: number
  isActive: boolean
  firstFlightDate: string
  costPerLaunch: number
  wikipediaHref: string
}

function getActiveLabel(isActive: boolean): string {
  return isActive ? 'Active' : 'Non active'
}

export const RocketInfo: React.FC<IRocketInfoProps> = (props) => {
  return (
    <div className={styles.rocketInfo}>
      <h2>
        <span className={styles.title}>{props.name}</span>
        <SuccessRateBadge successRate={props.successRate} />
      </h2>
      <span>{getActiveLabel(props.isActive)}</span>
      <p>{props.description}</p>
      <span className={styles.costPerLaunch}>
        Cost per launch: <b>${props.costPerLaunch}</b>
      </span>
      <span className={styles.firstFlight}>
        First flight: {props.firstFlightDate}
      </span>
      <div className={styles.thumbnailsCollection}>
        {props.imagesSrc.map((imageSrc) => (
          <RocketThumbnail
            key={imageSrc}
            thumbnailImageSrc={imageSrc}
            className={styles.thumbnailWrapper}
            rocketName={props.name}
          />
        ))}
      </div>
      <div className={styles.linksWrapper}>
        <a href={props.wikipediaHref} target="_blank">
          Read on wikipedia
        </a>
      </div>
    </div>
  )
}
