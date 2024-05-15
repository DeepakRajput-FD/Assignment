import React, { useState } from 'react'

export default function Task2() {
  
  let [count,setcount]=useState(0);

  return (
    <div>
      {count}
    <button onClick={()=>setcount(count+1)}>Increment</button>
    <button onClick={()=>setcount(count-1)}>Decrement</button>

    </div>
  )
}
