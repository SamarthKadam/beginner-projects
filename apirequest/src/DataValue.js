import React from 'react'
import axios from 'axios'
import Value from './Value'
import { useState } from 'react'

export default function DataValue(prop) {

  const[loader,setloader]=useState(0);
    const getdata=async function(url)
    {
      setloader(1);
      const api=await axios.get(url);
      const {data}=api;
      setTimeout(()=>{
        setloader(0);
        setuserdata(data.data);
      },500)
    }

   const[userdata,setuserdata]=useState(0);
   let data={
    userdata,
    setuserdata,
    getdata,
    loader,setloader
   };

  return (
    <Value.Provider value={data} > 
    {prop.children}
    </Value.Provider>
  )
}
