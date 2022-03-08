import { StyMenu,StyOption } from "./style"
import {NavLink} from 'react-router-dom'
import {MdShield as Shield} from 'react-icons/md'


interface IOptionProp{
    to: string
    title: string
}
const Option = ({to,title}:IOptionProp)=>{
    return(
        <StyOption to={to}>
                <span>{title}</span>
        </StyOption>
    )
}

export const Menu = ()=>{
    return(
        <StyMenu>
            <NavLink className="menu-logo" to={'/'}>
                <Shield id="logo"/>
                <h1>Departamento de Polícia</h1>
            </NavLink>

           <Option to="login" title="Login"/>

        </StyMenu>
    )
}