import React,{useState} from 'react'
import SingleColorPicker from './SingleColorPicker'

export default function RGBColorPicker() {
    const [values, setValues] = useState({
        rValue: 250,
        gValue: 250,
        bValue: 250
    })
    const handleChange = (e) => {
        setValues({
            ...values, 
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <div className="singlecolor">
                <div className="color-picker" 
                style=
                    {{backgroundColor: `rgb(${values.rValue}, 0, 0)`}}
                ></div>
                <SingleColorPicker 
                    color="r" 
                    value={values.rValue} 
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="singlecolor">
                <div className="color-picker" 
                style=
                    {{backgroundColor: `rgb(0, ${values.gValue}, 0)`}}
                ></div>
                <SingleColorPicker 
                    color="g" 
                    value={values.gValue} 
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="singlecolor">
                <div className="color-picker" 
                style=
                    {{backgroundColor: `rgb(0, 0, ${values.bValue})`}}
                ></div>
                <SingleColorPicker 
                    color="b" 
                    value={values.bValue} 
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="singlecolor">
                <div className="color-picker" 
                    style=
                        {{backgroundColor: `rgb(${values.rValue}, ${values.gValue}, ${values.bValue})`}}
                    ></div>
            </div>
        </div>
    )
}
