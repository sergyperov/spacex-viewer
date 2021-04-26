import styles from '@common/components/RocketThumbnail/RocketThumbnail.module.scss'
import { Img } from 'react-image'
import { Icon } from '@common/components/Icon/Icon'

/**
 * RocketThumbnail is simply an image of rocket with some basic styles
 * and accessibility markup
 */

export interface IRocketThumbnailProps {
  thumbnailImageSrc: string
  rocketName: string
  className?: string
}

export const RocketThumbnail: React.FC<IRocketThumbnailProps> = (props) => {
  const combinedClassName = props.className
    ? `${styles.thumbnailWrapper} ${props.className}`
    : `${styles.thumbnailWrapper}`

  return (
    <div className={combinedClassName}>
      <Img
        src={props.thumbnailImageSrc}
        className={styles.thumbnail}
        alt={`Photo of ${props.rocketName}`}
        loader={<Icon name={'spinner'} />}
      />
    </div>
  )
}