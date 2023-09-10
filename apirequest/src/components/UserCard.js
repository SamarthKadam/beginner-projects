import React from 'react'
import styles from '../App.module.css'
import {GoVerified} from 'react-icons/go'
export default function UserCard(props) {
  return (
    <div className={styles.list}>
     <GoVerified className={styles.heart} />
        <div className={styles.coverImg}>
          <img src={props.avatar} alt="person/img" />
        </div>
        <div className={styles.userName}>{props.firstname} {props.lastname}</div>
        <div className={styles.email}>{props.email}</div>
    </div>
  )
}
