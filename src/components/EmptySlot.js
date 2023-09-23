import React from 'react'
import { useEffect } from 'react'

function EmptySlot({setDisplayMole}) {
    useEffect(()=> {
        let random = Math.random()*10;
        const timer= setInterval(()=>{
         setDisplayMole (true)

        }, random *1000)
        return ()=> clearInterval(timer)
    }, [])
  return (
    <div>
                <img style={{"width":"30vw"}} src={"/molehill.png"} />

    </div>
  )
}

export default EmptySlot