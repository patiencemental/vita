import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.title}>VITA</div>
      <ul className={styles.menu}>
        <li><a href='https://my.surfit.io/w/1361970752' target='_blank'>Developer Resume</a></li>
      </ul>
    </div>
  </header>
}
