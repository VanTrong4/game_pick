import React, { useEffect, useState } from 'react'

const TimeCaculate = ({start}) => {
    const [time,setTime] = useState(0);

    useEffect(()=>{
      let interval = null;
  
      if(start){
        interval = setInterval(()=>{
          setTime(prev=>Math.round((prev+0.1) * 10) / 10)
        },100);
      }else{
        clearInterval(interval)
      }
  
      return ()=> clearInterval(interval)
    },[start])
    
  return (
    <span>{time}s</span>
  )
}

export default TimeCaculate
