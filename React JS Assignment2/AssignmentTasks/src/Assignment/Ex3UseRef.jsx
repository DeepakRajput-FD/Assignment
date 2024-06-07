import React, { useRef } from 'react'

export default function Ex3UseRef() {
  
    let inputRef=useRef('');

    let handleClick=()=>
        {
            inputRef.current.focus();
            console.log(inputRef.current.value)
        }

    return (
    <>
    <input type="text" placeholder='Enter Surname : ' ref={inputRef} />
    <button onClick={handleClick}>click here</button>
    </>
  )
}
