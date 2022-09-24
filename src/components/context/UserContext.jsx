import React, { createContext, useState, useContext} from 'react'

export const userContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState('')
    const handleChange = ({target: {name, value}}) => setUser({...user, [name] : value});
    const handleSubmit = e => {
        e.preventDefault()
        console.log(user)
    }
    return(
        <userContext.Provider value={{user, handleChange, handleSubmit}}>
            {children}
        </userContext.Provider>
    )
}

