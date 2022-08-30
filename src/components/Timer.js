import React from 'react'
import { useState, useEffect } from 'react';

const Timer = ({initialMinute,initialSeconds,changeColor}) => {
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    const [displayMessage, setDisplayMessage] = useState(false)

    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                    let minutes = displayMessage ? 24 : 0
                    let seconds = 59
                    
                    setMinutes(minutes)
                    setSeconds(seconds)
                    setDisplayMessage(!displayMessage)        
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds

    return (
        <div>
        {displayMessage && <div>Break time! New session starts in:</div>}

        {timerMinutes}: {timerSeconds}
        </div>
    )
}

export default Timer;