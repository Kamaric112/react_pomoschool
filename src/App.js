import React, { useEffect, useRef, useState } from 'react'
import "./App.css"
import FunctionButton from './components/FunctionButton'
import HeaderButton from './components/HeaderButton'
import Timer from './components/Timer'

function App() {
  const [backgroundColor, setBackgroundColor] = useState("redd")
  const [timer, setTimer] = useState("25:00")
  const [startCountDown, setStartCountDown] = useState(false) // if true then start count function

  const handleBackgroundChange = (color,time) => {
    setBackgroundColor(color)
    setTimer(time)
 }

 


  return (
  <div className={`container ${backgroundColor} `}>
        <div className="action-line">
          <HeaderButton btnClass = "action" btnId = "pomodoro" handleClick={(e)=>handleBackgroundChange("redd","25:00")} children = "Pomodoro"/>
          <HeaderButton btnClass = "action" btnId = "short-break" handleClick={(e)=>handleBackgroundChange("greenn","5:00")} children = "Short Break"/>
          <HeaderButton btnClass = "action" btnId = "long-break" handleClick={(e)=>handleBackgroundChange("bluee","15:00")} children = "Long Break"/>
        </div>

        <div className="timer">{timer}</div>
        <Timer initialMinute = {0} initialSeconds={3}  changeColor ={console.log("test")} />

        <FunctionButton />
       
    </div>  )
}

export default App