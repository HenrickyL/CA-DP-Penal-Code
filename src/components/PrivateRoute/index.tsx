import { useEffect, useState } from "react"
import {  useDispatch, useSelector } from "react-redux"
import { ApplicationState } from "../../store"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import * as authActions from '../../store/ducks/authentication/actions'
import { CheckStoreAutentication, getToken, validateToken } from "../../services/authService"
import { Spinner } from "@chakra-ui/react"
import { NavigationState } from "../../dto"




export const PrivateRoute = ()=>{
    const [auth, setAuth] = useState<Boolean>(false)
    const [isLoading,setLoading] =  useState<Boolean>(false)
    const authState = useSelector((state:ApplicationState) => state.auth);

    const dispatch = useDispatch()

    const state:NavigationState = {
      to: window.location.pathname,
      from: window.location.pathname,
      data: null
    }

    useEffect(()=>{
      setAuth(authState.authenticated)
      CheckStoreAutentication(dispatch)
      setTimeout(()=>setLoading(true),500)
      
      
      const handleInterval = setInterval(()=>{
        const token = getToken()
        const validate = validateToken(token)
        if(!validate){
          dispatch(authActions.logout)
          clearInterval(handleInterval)
        }
      },30000)
      return ()=>{
        clearInterval(handleInterval)
          }
    },[])
  
    useEffect(()=>{
        setAuth(authState.authenticated)
      },[authState])
     
    return(
        <>
            {
            isLoading ?
                 auth ?<Outlet />: <Navigate to='/login' state={state}/>
                : <Spinner size='xl'/>
            }
        </>
    )
}