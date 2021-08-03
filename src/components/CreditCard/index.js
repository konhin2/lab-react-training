import React from 'react'

export default function index(props) {
    const getType = (type) => {
        switch (type) {
            case 'Visa':
                return '/img/visa.png'
            case 'Master Card':
                return '/img/master-card.svg'
            default:
                return 'Unknown'
        }
    }
    const getExpires = (month) => {
        if (month > 9) {
            return month
        } else {
            return '0' + month
        }
    }
    const getYear = (year) => {
        const condensed = year + ""
        return condensed.substr(2,3)
    }
    return (
        <div className="CreditCard" style={{backgroundColor: props.bgColor, color:props.color}}>
            <div className="type">
                <img src={getType(props.type)} />
            </div>
            <div className="number">
                •••• •••• •••• {props.number.substr(12,15)}
            </div>
            <div className="expires-bank">
                <span>Expires {getExpires(props.expirationMonth)}/{getYear(props.expirationYear)}</span>
                <span>  {props.bank}</span>
            </div>
            <div className="owner">{props.owner}</div>
        </div>
    )
}
