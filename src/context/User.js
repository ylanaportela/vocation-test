import React, { createContext, useState, useEffect } from "react"
import axios from "axios"

export const UserContext = createContext() 
 
export default function UserProvider({ children }){
    const [profile, setProfile] = useState(null)
    const [nameUser, setNameUser] = useState("")
    const [imageUser, setImageUser] = useState(null)
    const [disabled, setDisabled] = useState(true)

    const url = "https://randomuser.me/api/"

    useEffect(() => {
        if (disabled === false) {
            axios.get(url).then((response) => {
                const [profile] = response.data.results
                setProfile(profile)
            })
        }
    }, [disabled])

    
    useEffect(() => {
        if (profile !== null) {
            setNameUser(`${profile.name.first} ${profile.name.last}`)
            setImageUser(profile.picture.large)
        }
    }, [profile])
    
    return(
        <UserContext.Provider value={{
            profile, 
            setProfile,
            nameUser,
            setNameUser,
            imageUser,
            setImageUser,
            disabled,
            setDisabled

        }}>
            { children }
        </UserContext.Provider>
    )
}