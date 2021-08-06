import React, {useState} from 'react'
import Greeting from './../greetings'

export default function Form() {
    const [newUser, setNewUser] = useState({
        email: '',
        password: '',
        lenguage: 'en'
    })
    const [error, setError] = useState(null)
    const [crateMode, setCrateMode] = useState(true)
    const [validation, setValidation] = useState({
        borderE: '2px solid black',
        borderP: '2px solid black',
    })
    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
        if (newUser.email.match(emailRegex) === null) {
            setValidation ({
                ...validation,
                borderE: "2px solid red",
                outlineE: "red"
            })
        } else {
            setValidation ({
                ...validation,
                borderE: "2px solid yellowgreen",
                outlineE: "yellowgreen"
            })
        }
        if (newUser.password.match(passwordRegex) === null) {
            setValidation ({
                borderP: "2px solid red",
                outlineP: "red"
            })
        }else {
            setValidation ({
                borderP: "2px solid yellowgreen",
                outlineP: "yellowgreen"
            })
        }
    }
    const createUser = (event) => {
        event.preventDefault()
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
        if (!newUser.email.trim() || !newUser.password.trim()) {
            return setError('Please fill all fields')
        } else if (newUser.email.match(emailRegex) === null) {
            return setError('Invalid email')
        } else if (newUser.password.match(passwordRegex) === null) {
            return setError('Password must contain at least one lowercase letter, one uppercase letter and one number')
        }
        setCrateMode(false)
        setError(null)
    }
    if (crateMode) {
        return (
            <div>
                <form onSubmit={
                    (e) => createUser (e)
                }>
                    <h3>Email</h3>
                    <input 
                        type="email" 
                        name="email"
                        value={newUser.email}
                        placeholder="Enter email" 
                        onChange={(e) => handleChange(e)}
                        className="form-control"
                        style={{border: validation.borderE, outline: validation.outlineE}}
                    />
                    <h3>Password</h3>
                    <input 
                        type="password" 
                        name="password"
                        value={newUser.password}
                        placeholder="Please write your password"
                        onChange={(e) => handleChange(e)}
                        className="form-control"
                        style={{border: validation.borderP, outline: validation.outlineP}}
                    />
                    <h3>Nationality</h3>
                    <select name="lenguage" onChange={(e) => handleChange(e)} className="form-control">
                        <option value="en">English</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                    </select>
                    <button className="form-button">Sign up</button>
                </form>
                {error ? error : null}
            </div>
        )
    } else {
        return(
            <div>
                <h3><Greeting lang={newUser.lenguage} /></h3>
                <p>Your email is: <span>{newUser.email}</span></p>
            </div>
        ) 
    }
    
}
