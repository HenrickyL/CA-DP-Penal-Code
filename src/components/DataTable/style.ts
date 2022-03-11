import { colors } from './../../styles/global';
import { Table, Td, Thead, Tr } from "@chakra-ui/react";
import styled from "styled-components";

export const StyThead = styled(Thead)``

export const StyTd = styled(Td)``
interface ITrProp{
    status:string
}
export const StyTr = styled(Tr)<ITrProp>`
    transition:0.3s;
    background-color:${colors.white1} ;

    ${p=> p.status ?  (p.status==='Inativo'?
        `
        color: gray;        
        background-color:${colors.white3} ;
        `
        :
        ``):``
    }

    &:hover{
        background-color:${colors.white2} ;
        filter:brightness(.9) ;
        
    }
    .bt-edit{
        font-size:1.2rem ;
        color: ${colors.primary};  
        cursor:pointer ;

    }
    .editable{
            color: ${colors.secundary};   
    }
    
    ${StyTd}{
        &:first-child{
            font-weight:bold ;
        }
        &:hover:last-child{
           transform:scale(1.1) ;
        }
    }

`;
export const StyTable = styled(Table)`
    background-color: #aaa;
    padding:1rem ;
    border-radius:8px ;
`