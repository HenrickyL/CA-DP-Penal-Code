import { colors } from './../../styles/global';
import styled,{keyframes} from 'styled-components'









export const Option = styled.div``
export const Options =styled.div``

const _len = 1;


//------------------------------------------------------------
interface IProp{
    active:boolean
    bgColor?: string
    hoverColor?: string
}

export const Dropdown = styled.div<IProp>`
    position: relative;
    display:flex ;
    align-items:center ;
    gap: 3px;

    &:hover::after{
        transform: scale(1.3) rotateZ(${props=>props.active? "-135deg": "45deg"});;
    }
    &:active::after{
        transform: rotateZ(45deg) scale(0.9)  ;
    }
    &::after{
        content: "";
        width: 0.5rem;
        height: 0.5rem;
        border:2px solid #333;
        border-top: none;
        border-left: none;
        transform: scale(0.5) rotateZ(${props=>props.active? "-135deg": "45deg"});
        transition: 0.3s;
        pointer-events: none;
        
        
    }
    
    ${Options}{
        ${props => !props.active && "visibility:hidden;"}
        display:flex ;
        flex-direction:column ;
        gap:1px ;
        position: absolute;
        top:${2+_len}rem;
        right:0;
        z-index:5;
        min-width:5rem ;
        width: 100%,;
        border: 1px solid rgba(0,0,0,0.1) ;
        border-top:none ;
        background-color: ${p=>p.bgColor?p.bgColor:'white'};
        box-shadow: 5px 5px 8px rgba(0,0,0,0.2);
        border-radius: 10px;
        padding: 5px 0;
        
        ${Option}{
            padding: 0.2rem 5px;
            cursor: pointer;
            display: flex;
            align-items: center;
            overflow: hidden;
            border-radius: 10px 0 0 10px;
            transition: .3s;
            .item{
                display:flex ;
                flex-direction:row ;
                align-items:center ;
            }
            span{
                margin-left: 5px;
                color: #444;
                font-weight:600;
            }
            &:hover{
                border-left: 5px solid ${p=>p.hoverColor?p.hoverColor:'gray'};
                font-weight: bold;
                background: rgba(0,0,0,0.1);
                span{
                    color:black;
                }
            }
        }
        &::after{
            content: "";
            position:absolute;
            top: calc(${-_len*0.5}rem);
            right:${_len*0.7}rem;
            
            width: 0; 
            height: 0; 
            border-left: 0.6rem solid transparent;
            border-right: 0.6rem solid transparent;
            
            border-bottom: 0.5rem solid ${p=>p.bgColor?p.bgColor:'white'};
            transform: scaleX(0.7);
        }
    }
    
    
`

