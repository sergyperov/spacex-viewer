import { useEffect } from 'react'
import { RocketsLoadingStatus } from '@store/rockets/rocketsActions'
import styles from './HomePageContainer.module.scss'
import Link from 'next/link'
import RocketCard from '@common/components/RocketCard/RocketCard'

export interface IHomePageContainerProps {
  loadRockets: () => void
  rocketIds: string[]
  loadingStatus: RocketsLoadingStatus
}

export const HomePageContainer: React.FC<IHomePageContainerProps> = ({
  loadRockets,
  rocketIds,
  loadingStatus,
}) => {
  useEffect(() => {
    loadRockets()
  }, [])

  if (loadingStatus === RocketsLoadingStatus.LOADED) {
    return (
      <div className={styles.rocketsGrid}>
        {rocketIds.map((rocketId) => (
          <Link key={rocketId} href={`/rocket/${rocketId}`}>
            <a>
              <RocketCard rocketId={rocketId} />
            </a>
          </Link>
        ))}
      </div>
    )
  } else {
    return <span className={styles.statusMsg}>Loading...</span>
  }
}
