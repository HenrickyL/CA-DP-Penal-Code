import { colors } from './../../styles/global';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';



export const StyOption = styled(NavLink)`
    display: flex;
    align-items:center ;
    transition:0.3s;
    height:100% ;
    padding: 1rem;
    border-radius:8px ;
    background-color: ${colors.secundary};
    color:white;
    &.active{
        background-color: ${colors.white2};
        color:black;
        border-radius:12px ;

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