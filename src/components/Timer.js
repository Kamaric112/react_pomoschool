import React from 'react'
import { useState, useEffect } from 'react';

const Timer = ({initialMinute,initialSeconds,endMinute, endSeconds,bgColor , changeColor}) => {
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    const [displayMessage, setDisplayMessage] = useState(false)
    const [colorTest, setColorTest] = useState(bgColor)

    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                    colorTest ==="redd" ? endMinute = 0 : colorTest ==="greenn" ? endMinute= 0 : colorTest ==="bluee" ? endMinute = 0 :endMinute = 24
                    let minutes = endMinute
                    let seconds = 3
                    
                    setMinutes(minutes)
                    setSeconds(seconds)
                    setDisplayMessage(!displayMessage)        
                    return (changeColor)
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
        <div >
        {displayMessage && <div>Break time! New session starts in:</div>}

        {timerMinutes}: {timerSeconds}
        </div>
    )
}

export default Timer;