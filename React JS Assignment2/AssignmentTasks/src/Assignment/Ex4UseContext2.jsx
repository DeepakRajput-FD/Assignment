import React, { useContext } from 'react'
import { context1 } from './Ex4UseContext1' 

export default function Ex4UseContext2() {
  
    let record=useContext(context1)

    return (
    <>
        <h3>{record.name}</h3>
    </>
  )
}
