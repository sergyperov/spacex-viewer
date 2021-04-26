import React from 'react'
import styles from './SuccessRateBadge.module.scss'

/**
 * Coloured badge showing some amount of percent
 */

export interface ISuccessRateBadgeProps {
  successRate: number
}

function deriveBadgeClassName(successRate: number): string {
  if (successRate >= 60) {
    return styles.perfectRate
  } else if (successRate >= 30) {
    return styles.normalRate
  } else {
    return styles.awfulRate
  }
}

export const SuccessRateBadge: React.FC<ISuccessRateBadgeProps> = (props) => (
  <span
    className={`${styles.successRateBadge} ${deriveBadgeClassName(
      props.successRate
    )}`}
  >
    {props.successRate}%
  </span>
)
