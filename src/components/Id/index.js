import React from 'react'

export default function IdCard(props) {
    return (
        <div className="IdCard box">
            <div>
                <img src={props.picture} />
            </div>
            <div className="right">
                <strong>First name</strong>
                ":"
                "{props.firstName}"
                <br />
                <strong>Last name</strong>
                ":"
                "{props.lastName}"
                <br />
                <strong>Gender</strong>
                ":"
                "{props.gender}"
                <br />
                <strong>Height</strong>
                ":"
                "{props.height}"
                "m "
                <br />
                <strong>Birth</strong>
                ":"
                "{props.birth.toString()}"
                <br />
            </div>
            
        </div>
    )
}
