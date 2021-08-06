import React, { useState} from 'react'

export default function Dice() {
    const [state, setState] = useState({
        clicked: false,
        pathImg: "/img/dice1.png"
    })
    const clickedDice = () => {
        if (!state.clicked) {
            setState({clicked: true, pathImg: "/img/dice-empty.png"})
        }
        setTimeout(()=>{
            const random = Math.floor(Math.random() * 6) + 1
            setState({clicked: false, pathImg: `/img/dice${random}.png`})
        }, 1000)
    }
    return (
        <>
            <img className="Dice" onClick={clickedDice} src={state.pathImg}/>
        </>
    )
}
