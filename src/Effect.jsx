import React,{ useState,useEffect } from 'react'

function Effect() {
    const[count,setcount]=useState(0);
    const[name,setname]=useState('');

    useEffect(()=>{
        console.log('useEffect called');
        console.log('Count',count);
        console.log('Name:',name);
    },[]);
    console.log('Name:',name);
  return (
    <div>
        <h2>useEffect Example</h2>
        <div>
            <button onClick={()=> setcount(count+1)}>Increment</button>
        </div>
        <div>
            <button onClick={()=> setname('New Name')}>Change Name</button>
        </div>
        <p>Name:{name}</p>
    </div>
  )
}

export default Effect