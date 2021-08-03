import React from 'react'

export default function index(props) {
    const rounded = Math.round(props.children)
    const getRatings = (rating) => {
        switch (rating) {
            case 0:
                return '☆☆☆☆☆'
                break;
            case 1:
                return '★☆☆☆☆'
                break;
            case 2:
                return '★★☆☆☆'
                break;
            case 3:
                return '★★★☆☆'
                break;
            case 4:
                return '★★★★☆'
                break;
            case 5:
                return '★★★★★'
                break;
            default:
                return 'undefined'
                break;
        }
    }
    return (
        <div className="Rating">
            {getRatings(rounded)}
        </div>
    )
}