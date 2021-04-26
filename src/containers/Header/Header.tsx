import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'

export const Header: React.FC = () => (
  <header className={styles.header}>
    <Link href={'/'}>
      <a>SpaceX Rockets</a>
    </Link>
  </header>
)