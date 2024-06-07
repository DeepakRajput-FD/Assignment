import React, { useState } from 'react'

export default function Ex1UseState() {
  
  let [name,setName]=useState('');

  return (
    <>
    <input type="text" placeholder='Enter Name : ' onChange={(e)=>setName(e.target.value)} />
    {
      name
    }
    </>
  )
}
