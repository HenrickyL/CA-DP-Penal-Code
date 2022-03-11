import { useEffect, useState } from "react"
import {  useSelector } from "react-redux"
import { ApplicationState } from "../../store"
import { Navigate, Outlet } from "react-router-dom"




export const PrivateRoute = ()=>{
    const [auth, setAuth] = useState<Boolean>(false)
    const [isLoading,setLoading] =  useState<Boolean>(false)
    const authState = useSelector((state:ApplicationState) => state.auth);


    useEffect(()=>{
        setAuth(authState.authenticated)
        setLoading(true)
    },[])

    useEffect(()=>{
        setAuth(authState.authenticated)
    },[authState])

    return(
        <>
            {
            isLoading ?
                 auth ?<Outlet />: <Navigate to={'login'}/>
                : <h1>loading...</h1>
            }
        </>
    )
}