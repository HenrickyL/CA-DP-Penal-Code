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
import {IUser} from '../../store/ducks/authentication/types'

import { Dispatch } from "redux"
import MenuDropdown from "../OptionDropdown"
import { upperFirst } from "../../services/formatService"
// import { TabList, Tab, Tabs } from "@chakra-ui/react"
interface IOptionProp{
    to: string
    title: string
    className?: string
}
type TOptionProp = IUserOpProp & IOptionProp


const Option = ({to,title,className,dispatch}:TOptionProp)=>{
    const handleClick = ()=>{
        dispatch && dispatch(uiActions.setRedirect({value:false, previousUrl:window.location.pathname}))
    }
    return(
        <StyOption onClick={handleClick} className={className} to={to}>
                <span>{title}</span>
        </StyOption>
    )
}

interface IUserOpProp{
    dispatch?: Dispatch
}
interface IPropOption{
    user:IUser | null
}

const UserOptions = ({user}:IPropOption)=>{

    return(
        <StyUserOptions>
            {user &&<span>{upperFirst(user.nome)}</span>}
            <UserImg  className="icon"/>
        </StyUserOptions>
    )
}

export interface ISubMenu{
    title: string
    to: string
}
interface IProp{
    subMenu?: ISubMenu[]
}

export const Menu = (prop:IProp)=>{
    const dispatch = useDispatch()
    const [user, setUser] = useState<IUser | null>(null)
    const authState = useSelector((state:ApplicationState) => state.auth);
    const uiState = useSelector((state:ApplicationState) => state.ui);
    const [authenticated, setAutenticated] = useState<boolean>(false)

    useEffect(()=>{
        dispatch(uiActions.clean())
    },[])

    useEffect(()=>{
        setAutenticated(authState.authenticated)
        setUser(authState.user)
    },[authState, uiState])

    const handleLogout = ()=>{
        dispatch(authActions.logout())
    }
    

    return(
        <div>

            <StyMenu>
                    <NavLink className="menu-logo" to={'/'}>
                        <Shield id="logo"/>
                        <h1>Departamento de Polícia</h1>
                    </NavLink>
                    <div className="options">
                        {/* {prop.subMenu?
                            <Tabs >
                                <TabList>
                                    {prop.subMenu.map((option,i)=>
                                        <Tab key={`T${i}`}>
                                            <Option key={`O${i}`} to={option.to} title={option.title}  />    
                                        </Tab>
                                    )}
                                </TabList>
                            </Tabs> 
                            :<></>} */}
                        {authenticated? 
                            <MenuDropdown element={<UserOptions user={user} />} items={[{title:'Logout',onClick:handleLogout,img:Logout}]} />
                            :<Option to="login" dispatch={dispatch} className={'login'} title="Login"/>}
                    </div>
            </StyMenu>
            
            
        </div>
    )
}