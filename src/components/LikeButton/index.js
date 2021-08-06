import React,{useState} from 'react'

export default function Like(params) {
    const [state, setState] = useState({
        color: "purple",
        likes: 0,
        border: "5px solid transparent"
    })
    const clicked = (event) => {
        event.preventDefault()
        setState({
            color: params.color,
            likes: state.likes + 1,
            border: "5px solid blue"
        })
    }
    return (
        <>
            <button onClick={(e)=> clicked(e)} style={{
                backgroundColor: state.color,
                borderRadius: "10px",
                fontSize: "20px",
                color: "white",
                width: "150px",
                marginRight: "1em",
                height: "50px",
                cursor: "pointer",
                border: state.border,
            }}>{state.likes} Likes</button>
        </>
    )
}
