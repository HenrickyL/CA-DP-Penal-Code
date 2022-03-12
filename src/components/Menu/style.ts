import { colors } from './../../styles/global';
import styled,{keyframes} from 'styled-components'
import { NavLink } from 'react-router-dom';




export const StyUserOptions = styled.div`
    display:flex ;
    flex-direction:row ;
    align-items: center;
    gap:5px ;
    font-weight:bold ;
    .icon{
        width:2rem ;
        height:2rem ;
        color:${colors.primary};
        padding: 5px;
        border-radius:50% ;
        border: 2px solid ${colors.primary} ;
        transition: 0.5s;
        cursor:pointer ;
        &:hover{
            padding: 4px;
            color:black;
            border: 1px solid black ;
        }
        &:active{
            padding: 4px;
            transform: scale(0.95) ;
            color:${colors.secundary};
            border: 1px solid ${colors.secundary} ;
        }
    }
`


export const StyOption = styled(NavLink)`
    display: flex;
    align-items:center ;
    transition:0.3s;
    border-radius:8px ;




    &.login{
        padding: 1rem;
        height:100% ;
        background-color: ${colors.secundary};
        color:white;
        &.active{
            background-color: ${colors.white2};
            color:black;
            border-radius:12px ;
        }
    }
    span{
        font-weight:bold ;
        width: 100%;
    }
`

export const  StyMenu = styled.nav`
    display:flex ;
    flex-direction:row;
    align-items:center ;
    justify-content:space-between;
    background-color: rgba(0,0,0,0.3);
    width:100vw ;
    height: 3rem;
    padding: 5px 1rem ;
    .options{
        display:flex ;
        flex-direction:row ;
    }
    .menu-logo{
        display:flex ;
        align-items:center ;
        justify-content:center ;
        gap:5px ;

        h1{
            color:black;
            font-size: 1.2rem ;
            font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif ;
            font-weight:bold ;
        }

    }
    #logo{
        height:1.8rem ;
        width:1.8rem ;
        color: ${colors.primary};
        cursor:pointer ;
        transition:0.3s;
        &:active{
            color: ${colors.primaryLight};
            transform:scale(.95) ;
        }
    }

   

`