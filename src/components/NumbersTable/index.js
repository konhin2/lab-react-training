import React, {useState} from 'react'

export default function Index(params) {
    const setArr =() => {
        const arr = []
        for (let i = 1; i <= params.limit; i++) {
            arr.push(i)
        }
        return arr 
    }
    return (
        <ul className="NumbersTable">
            {
                setArr().map((item, index) => {
                    return <li style={{backgroundColor: item % 2 === 0 ? "red": "white"}}>{item}</li>
                })
            }
        </ul>
    )
}
