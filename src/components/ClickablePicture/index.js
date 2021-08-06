import React, { useState } from 'react'

export default function Image(params) {
    const [state, setState] = useState({
        src: params.img,
    })
    const clicked = () => {
        if (state.src === params.img) {
            setState({ src: params.imgClicked })
        } else {
            setState({ src: params.img })
        }
    }
    return (
        <div>
            <img style={{cursor:"pointer", width:"128px"}} src={state.src} onClick={(e) => clicked(e)}/>
        </div>
    )
}
