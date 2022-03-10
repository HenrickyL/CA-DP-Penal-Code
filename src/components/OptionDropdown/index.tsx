import { useState } from "react"
import { NavLink } from "react-router-dom"
import { colors } from "../../styles/global"
import {Dropdown,Options, Option} from './style'
interface Item{
    title: string
    to?: string
    img?: any
    onClick?():void
}
interface IProp{
    items:Item[]
    element: JSX.Element
    color?: string
}
const MenuDropdown = ({items,element,color}:IProp)=>{
    const [value,setValue] = useState("")
    const [active,setActive] = useState(false)
    const handleClickOption= (e:any)=>{
        setValue(e.target.textContent)
    }
    const handleClick = ()=>{
        setActive(!active)
    }
    const handleBlur = ()=>{
        setTimeout(()=>setActive(false), 150)
    }

  
    return (
        <Dropdown bgColor={color || colors.background } active={active}
            onClick={handleClick}
            onBlur={handleBlur}

         >
            {element}
            {active &&<Options >
                {
                items.map( (op,i)=>(
                    <Option key={`Mdd_${i}`} id={`op_${i}`} 
                     onClick={handleClickOption}
                     >
                         {op.to?
                            <NavLink className={'item'} to={op.to}>
                                {op.img  && <op.img />}
                                <span>{op.title}</span>
                            </NavLink>
                            :
                            <div onClick={op.onClick} className="item">
                                {op.img  && <op.img />}
                                <span>{op.title}</span>
                            </div>
                        
                        }
                            
                    </Option>
                ))
                }
            </Options>}
        </Dropdown>
    )


}

export default MenuDropdown