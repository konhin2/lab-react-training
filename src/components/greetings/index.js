import React, { Children } from 'react'

export default function index(props) {
    const greetings = (lang) => {
        switch (lang) {
            case 'de':
                return 'Hallo'
                break;
            case 'en':
                return 'Hello'
                break;
            case 'es':
                return 'Hola'
                break;
            case 'fr':
                return 'Bonjour'
                break;
            default:
                break;
        }
    }
    
    return (
        <div className='box'>
            {greetings(props.lang)} {props.children}
        </div>
    )
}
