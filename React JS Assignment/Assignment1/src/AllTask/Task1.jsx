import React, { useState } from 'react'

export default function Task1() {
  
    let [name,setname]=useState('');

    let [record,setrecord]=useState([]);

    let handleSubmit=()=>
        {
            setrecord([...record,name]);
            setname('');
        }

    return (
    <div>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setname(e.target.value)} />
        <button onClick={handleSubmit}>Add</button>

        {
            record.map((item,i)=>
                {
                    return <h2>{item}</h2>
                })
        }

    </div>
  )
}
