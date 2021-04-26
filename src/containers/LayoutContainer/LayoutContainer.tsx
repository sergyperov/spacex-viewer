import React, { Component } from 'react'
import { Header } from '@containers/Header/Header'
import styles from './LayoutContainer.module.scss'

export class LayoutContainer extends Component {
  render(): JSX.Element {
    const { children } = this.props
    return (
      <div>
        <Header />
        <div className={styles.content}>{children}</div>
      </div>
    )
  }
}
