import { StyContainer, StyFooter, StyMain,StyHeader } from "./styles";
import {Outlet} from 'react-router-dom'
import {ISubMenu, Menu} from '../../components/Menu'
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import { useEffect } from "react";
import * as authActions from '../../store/ducks/authentication/actions'
import { CheckStoreAutentication, getToken, validateToken } from "../../services/authService";


const subMenu : ISubMenu[] = [
  {
    title:'Código Penal',
    to:'penal-codes'
  },
  {
    title:'outro',
    to:'aaa'
  },
  {
    title:'outro',
    to:'aaa2'
  }
]



export function Base() {
  const dispatch = useDispatch()
    const authState = useSelector((state:ApplicationState) => state.auth);

    

    useEffect(()=>{
        CheckStoreAutentication(dispatch)
    },[])

    useEffect(()=>{
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
    },[authState])

  return (
    <StyContainer>
      <StyHeader>
          <Menu subMenu={subMenu}/>
      </StyHeader>
      <StyMain>
        <Outlet />
      </StyMain>
      <StyFooter>
        <div>
          <span>footer</span>
        </div>
      </StyFooter>
    </StyContainer>
  );
}
