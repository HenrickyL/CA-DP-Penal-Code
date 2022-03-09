import { StyMenu,StyOption,StyUserOptions } from "./style"
import {NavLink} from 'react-router-dom'
import {MdShield as Shield} from 'react-icons/md'
import {FaUserNurse as UserImg} from 'react-icons/fa'
import {BiLogOut as Logout} from 'react-icons/bi'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ApplicationState } from "../../store"
import * as uiActions from '../../store/ducks/ui/actions'
import * as authActions from '../../store/ducks/authentication/actions'
import { Dispatch } from "redux"
import MenuDropdown from "../OptionDropdown"
interface IOptionProp{
    to: string
    title: string
    className: string
}
const Option = ({to,title,className}:IOptionProp)=>{
    return(
        <StyOption className={className} to={to}>
                <span>{title}</span>
        </StyOption>
    )
}

interface IUserOpProp{
    dispatch: Dispatch
}
const UserOptions = ({dispatch}:IUserOpProp)=>{

  
    return(
        <StyUserOptions>
            <UserImg  className="icon"/>
        </StyUserOptions>
    )
}

export const Menu = ()=>{
    const dispatch = useDispatch()
    const authState = useSelector((state:ApplicationState) => state.auth);
    const uiState = useSelector((state:ApplicationState) => state.ui);
    const [authenticated, setAutenticated] = useState<boolean>(false)

    useEffect(()=>{
        dispatch(uiActions.clean())
    },[])

    useEffect(()=>{
        setAutenticated(authState.authenticated)
    },[authState, uiState])

    const handleLogout = ()=>{
        dispatch(authActions.logout())

    }

    return(
        <StyMenu>
                <NavLink className="menu-logo" to={'/'}>
                    <Shield id="logo"/>
                    <h1>Departamento de Polícia</h1>
                </NavLink>
                {
                    authenticated? 
                        <MenuDropdown element={<UserOptions dispatch={dispatch}/>} items={[{title:'Logout',onClick:handleLogout,img:Logout}]} />
                        :<Option to="login" className={'login'} title="Login"/>
                }
                
        </StyMenu>
    )
}