import React, {useEffect, useState} from "react";
import app from "./base"
import  Spin from '../Layout/Spinner'
export const AuthContext = React.createContext()

export const AuthProvider=({children})=>{

    const[currentUser, setCurrentUser]=useState(null)
    const [pending, setPending]=useState(true)
    console.log(currentUser)
    console.log('rendering auth')
    
    useEffect(()=>{
        app.auth().onAuthStateChanged((user)=>{
            setCurrentUser(user)
            setPending(false)
        })
        console.log("rendering authstate")
    },[])
    if(pending){
        return <Spin/>
    }
    return(
        <AuthContext.Provider value={{currentUser}}>{children}</AuthContext.Provider>
    )
}