import React from 'react'

export default function index(props) {
    const rgb_to_hex = (colorval)=>{
        var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    	
        delete(parts[0]);
    	
        for (var i = 1; i <= 3; ++i) {
            parts[i]= parseInt(parts[i]).toString(16);
            if (parts[i].length == 1) parts[i]= '0' + parts[i];
        }
        return '#' + parts.join('');
    }
    return (
        <div className="BoxColor box" style={{backgroundColor: rgb_to_hex(`rgb(${props.r}, ${props.g}, ${props.b})`)}}>
            rgb({props.r}, {props.g}, {props.b}) <br/>
            {rgb_to_hex(`rgb(${props.r}, ${props.g}, ${props.b})`)}
        </div>
    )
}
