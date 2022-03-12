import { StyContainer, StyFooter, StyMain,StyHeader } from "./styles";
import {Outlet} from 'react-router-dom'
import {ISubMenu, Menu} from '../../components/Menu'
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import { useEffect, useState } from "react";
import * as authActions from '../../store/ducks/authentication/actions'
import { CheckStoreAutentication, getToken, validateToken } from "../../services/authService";


const subMenu : ISubMenu[] = [
  {
    title:'Código Penal',
    to:'penal-codes'
  },
 ]



export function Base() {
    const [auth, setAuth] = useState<Boolean>(false)
    const authState = useSelector((state:ApplicationState) => state.auth);

    

    useEffect(()=>{
      setAuth(authState.authenticated)
    },[])

    useEffect(()=>{
      setAuth(authState.authenticated)
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
