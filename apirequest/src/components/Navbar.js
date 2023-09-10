// import React, { Fragment } from 'react'
import { useContext } from 'react'
import {BsChevronDown} from 'react-icons/bs'
import styles from '../App.module.css'
import icon from '../content/app.png'
import Value from '../Value'
export default function Navbar() {

  const data=useContext(Value);

  return (
    <div className={styles.NavBarPar}>
        <div className={styles.Navbar}>
          <div className={styles.OneNav}>
          <img className={styles.icon} src={icon} alt="Icon" ></img>
          <p className={styles.texticon}>LetsGrowMore</p>
          </div>
          <div className={styles.TwoNav}>
            <ul className={styles.List}>
              <li>About us</li>
              <li>How it works</li>
              <li>Explore <BsChevronDown/></li>
              <li>Impact <BsChevronDown/></li>
            </ul>
          </div>
          <div className={styles.ThreeNav}>
            <button onClick={()=>{ data.getdata('https://reqres.in/api/users?page=1')}}>Get Users</button>
          </div>
        </div>
    </div>
  )
}
