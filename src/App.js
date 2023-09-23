import { useState } from 'react'
import MoleContainer from './components/MoleContainer'

function App(){
    let [score, setScore] = useState(0)

    const createMoleHill = () => {
        let hills = []
        for (let i = 0; i < 9; i++) {
            hills.push(
                <MoleContainer
                key={i}
                setScore={setScore}
                score={score} />
            )
        }
    
        return (
            <div style={{display:"flex", flexWrap: "wrap"}}>
                {hills}
            </div>
        )
    }

    return (
        <div className="App" style={{display:"flex", flexDirection: "column", justifyContent:"center", alignItems:"center"}}>
            <h1>React-a-Mole!</h1>
            {score}
            {createMoleHill()}
        </div>
    )
}

export default App


