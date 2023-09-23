import React from 'react'
import { useEffect } from 'react';
//import moleImg from "/mole.png"

function Mole({setDisplayMole, boppedMole}) {
    useEffect(()=> {
        let random = Math.random()*10;
        const timer= setInterval(()=>{
         setDisplayMole (false)

        }, random *1000)
        return ()=> clearInterval(timer)
    }, [])
  return (
    <div>
        <img style={{"width":"30vw"}} src={"/mole.png"} onClick ={() => boppedMole()} />
    </div>
  )
}

export default Mole