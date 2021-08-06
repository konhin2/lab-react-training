import React from 'react'

export default function SingleColorPicker(props) {
    return (
        <div>
            <span>{props.color}:</span>
            <input 
                type="number"
                name={props.color + "Value"}
                min="0"
                max="255"
                value={props.value}
                onChange={(e) => props.onChange(e)}
            />
        </div>
    )
}
