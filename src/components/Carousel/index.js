import React, {useState} from 'react'

export default function Carousel(params) {
    const [currentImg, setCurrentImg] = useState({
        src: params.imgs[0],
    })
    const clickedLeft = () => {
        const index = params.imgs.indexOf(currentImg.src)
        if (index > 0) {
            setCurrentImg({
                src: params.imgs[index - 1],
            })
        } else {
            setCurrentImg({
                src: params.imgs[params.imgs.length - 1],
            })
        }
    }
    const clickedRight = () => {
        const index = params.imgs.indexOf(currentImg.src)
        if (index < params.imgs.length - 1) {
            setCurrentImg({
                src: params.imgs[index + 1],
            })
        } else {
            setCurrentImg({
                src: params.imgs[0],
            })
        }
    }
    return (
        <div className="Carousel">
            <button onClick={clickedLeft}>Left</button>
            <img src={currentImg.src}/>
            <button onClick={clickedRight}>Right</button>
        </div>
    )
}
