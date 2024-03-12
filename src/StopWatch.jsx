import React, { useEffect, useState, useRef } from 'react'


function StopWatch (){
 
    const [isRun, upIsRunning] = useState(false);
    const [elTime, upElTime] = useState(0);
    const intervalId = useRef(null);
    const startTimeRef = useRef(0);
  
    useEffect(()=>{
    if(isRun){
       
       intervalId.current = setInterval(() => {
            upElTime(Date.now() - startTimeRef.current)
        }, 10);
    }
    return () =>{
        clearInterval(intervalId.current)
    }
     
    }, [isRun])
    function start(){
      upIsRunning(true);
      startTimeRef.current = Date.now() - elTime; 
    }
    function stop(){
        upIsRunning(false)
    }
    function reset(){
        upElTime(0);
        upIsRunning(false)

    }
    function formartTime(){
        let hour = Math.floor(elTime / (1000 * 60 *60));
        let minute = Math.floor(elTime / (1000 * 60) % 60);
        let second = Math.floor((elTime / (1000) % 60));
        let millisecond = Math.floor((elTime % 1000) / 10);       
       
       minute = String(minute).padStart("2", 0);
       second = String(second).padStart("2", 0);
       millisecond = String(millisecond).padStart("2", 0);
       hour = String(hour).padStart("2", 0);
    // add ${hour}: in front of the ${minute} for an hour display//
       return `${minute}:${second}:${millisecond}`;
    }
    
    return(<>
    <div className='stopwatch'>
        <p className='wa'>⏱</p>
        <div className='display'>{formartTime()}</div>
 <div className='controls'>

    <button onClick={start} className='butt3 start'>start</button>
   
    <button onClick={reset} className='butt3 reset'>reset</button>
    <button onClick={stop} className='butt3 stop'>stop</button>
 </div>
    </div>
    
    </>)

}

export default StopWatch