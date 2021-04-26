import styles from '@containers/RocketInfo/RocketInfo.module.scss'
import { AppState } from '@store/store'
import { connect } from 'react-redux'
import { IRocketInfoProps, RocketInfo } from '@containers/RocketInfo/RocketInfo'
import { useEffect, useState } from 'react'
import * as API from '@common/api/rockets'
import { convertAPISchemaToProps } from '@containers/RocketInfo/lenses'

interface IRocketInfoContainerProps {
  rocket?: IRocketInfoProps
  rocketId: string
}

/**
 * Container for Rocket Info component
 * Has two types of behaviour:
 * 1) If rocket info is passed via props - takes it from Redux store
 * 2) I page was opened as a new one - loads data for a given rocket (no redux involved)
 */
const RocketInfoContainer: React.FC<IRocketInfoContainerProps> = (props) => {
  const [rocket, setRocket] = useState(props.rocket)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (typeof rocket === 'undefined') {
      API.getRocket(props.rocketId)
        .then((rocket) => {
          setRocket(convertAPISchemaToProps(rocket))
        })
        .catch(() => {
          setNotFound(true)
        })
    }
  }, [])

  return (
    <div className={styles.rocketInfoContainer}>
      {typeof rocket !== 'undefined' ? (
        <RocketInfo {...rocket} />
      ) : (
        <span className={styles.statusMsg}>
          {notFound ? 'Rocket not found' : 'Loading...'}
        </span>
      )}
    </div>
  )
}

interface IRocketInfoContainerProps {
  rocketId: string
}

type TMapStateToProps = (
  state: AppState,
  ownProps: IRocketInfoContainerProps
) => IRocketInfoContainerProps

const mapStateToProps: TMapStateToProps = (state, ownProps) => {
  const rockets = state.rockets.data.entities.rockets
  const rocket = rockets && rockets[ownProps.rocketId]
  if (rocket) {
    const rocket = rockets[ownProps.rocketId]
    return {
      rocket: convertAPISchemaToProps(rocket),
      rocketId: ownProps.rocketId || '',
    }
  }

  return {
    rocketId: ownProps.rocketId,
  }
}

export default connect(mapStateToProps)(RocketInfoContainer)
