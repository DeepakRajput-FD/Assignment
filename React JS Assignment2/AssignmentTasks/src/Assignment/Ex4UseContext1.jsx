import React, { createContext, useState } from 'react'
import Ex4UseContext2 from './Ex4UseContext2';

export let context1=createContext();

export default function Ex4UseContext1() {

    let [name,setname]=useState('');

    return (
    <>
    <input type="text" placeholder='ENter name : ' onChange={(e)=>setname(e.target.value)} />

        <context1.Provider value={{name}}>
        <Ex4UseContext2/>
        </context1.Provider>

    </>
  )
}
