// Just one example
import Mole from './Mole'
import { useState } from 'react'
import EmptySlot from './EmptySlot';

function MoleContainer({score, setScore, key}){
    let [displayMole, setDisplayMole] = useState(true);
    const boppedMole = () => {
            setScore(score+1)
            setDisplayMole(false)
    }

    return (
        <div>
    
            {displayMole ? <Mole setDisplayMole ={setDisplayMole}boppedMole={boppedMole} />:<EmptySlot setDisplayMole ={setDisplayMole} />}
        </div>
    )
}
export default MoleContainer;