import React from 'react'
import styles from '../App.module.css'
export default function Spinner() {
  return (
    <div className={styles.loaderDiv}>
        <div className={styles.loader}></div>
    </div>
  )
}
