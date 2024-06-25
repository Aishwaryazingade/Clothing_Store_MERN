import React, { useEffect, useState } from 'react'

import Itms from '../Items/Itms'
import './Newcollections.css'

const Newcollections = () => {

  const [newcollection,setNewCollection]=useState([])

  useEffect(()=>{
    try{
      fetch('http://localhost:4000/newcollections')
      .then((res)=>res.json())
      .then((data)=>{setNewCollection(data)})
    } catch (error) {
      console.error('Failed to fetch:', error);}
 
  },[])
   
  
  return (
   <div className="new-collections">
    <h1>NEW COLLECTIONS</h1>
    <hr />

    <div className="collections">
        {newcollection.map((item,i)=>{
            return <Itms key={i} 
                     id={item.id} 
                     name={item.name} 
                     image={item.image} 
                     new_price={item.new_price} 
                     old_price={item.old_price}
                      />
        })}
    </div>
   </div>
  )
}

export default Newcollections
