import React, { useContext } from 'react'
import styles from '../App.module.css'
import UserCard from './UserCard'
import Value from '../Value'
export default function UserSection() {
    const lists=useContext(Value);
    const data=lists.userdata;
  return (
    <div className={styles.section}>
      {
        data.map((value,id)=><UserCard key={id} avatar={value.avatar} email={value.email} firstname={value.first_name} lastname={value.last_name}></UserCard>)
      }
      <div onClick={()=>{if(lists.userdata[0].id===1){lists.getdata('https://reqres.in/api/users?page=2')}else{lists.getdata('https://reqres.in/api/users?page=1')}                     }} className={styles.nextPage}>{data[0].id===1?'Next':'Back'}</div>
    </div>
  )
}
