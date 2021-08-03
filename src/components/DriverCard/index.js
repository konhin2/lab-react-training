import React from 'react'
import Rating from './../rating'

export default function index(props) {
    return (
        <div className="DriverCard">
            <img className="left" src={props.img} />
            <div className="right">
                <h2>{props.name}</h2>
                <Rating>{props.rating}</Rating>
                <p>
                    {props.car.model} - {props.car.licensePlate}
                </p>
            </div>
        </div>
    )
}