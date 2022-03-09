import { Container, Footer, Main,Header } from "./styles";
import {Outlet} from 'react-router-dom'
import {Menu} from '../../components/Menu'
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import { useEffect } from "react";
import * as uiActions from '../../store/ducks/ui/actions'
import * as authActions from '../../store/ducks/authentication/actions'
import { getToken, getUser, validateToken } from "../../services/authService";




export function Base() {
  const dispatch = useDispatch()
    const authState = useSelector((state:ApplicationState) => state.auth);

    const CheckStoreAutentication = ()=>{
      const token = getToken()
      const validate = validateToken(token)
      if(validate){
        const user =getUser()
        dispatch(authActions.loginSuccess(validate,user,token))
      }
    }

    useEffect(()=>{
        dispatch(uiActions.clean())
        CheckStoreAutentication()
    },[])

    useEffect(()=>{
      CheckStoreAutentication()
    },[authState])

  return (
    <Container>
      <Header>
          <Menu/>
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <span>
         footer
        </span>
      </Footer>
    </Container>
  );
}
