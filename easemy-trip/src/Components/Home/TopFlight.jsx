import React from 'react'
import BottomAppBar from './BottomAppBar'
import style from "./topflight.module.css"
const TopFlight = () => {
  return (
    <div className={style.main}>
       <div className={style.first}>
       
           </div> 
           <div className={style.second}>   <BottomAppBar /></div>
    
    </div>
  )
}

export default TopFlight
