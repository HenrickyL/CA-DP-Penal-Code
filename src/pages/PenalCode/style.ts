import { colors } from './../../styles/global';
import styled from 'styled-components'


export const StyPenalCode = styled.div`
    width:80% ;
    max-width:60rem ;
    height:100% ;
    border-radius:8px ;
    padding: 2rem 1rem;
    display:flex ;
    flex-direction:column ;

    .bt-add{
        align-self:flex-end ;
        background-color:${colors.primaryLight} ;
        transition:0.3s ;
        &:hover{
            background-color:${colors.primary} ;
            color:white;
        }
    }
`