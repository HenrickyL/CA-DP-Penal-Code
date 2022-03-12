import { Select } from '@chakra-ui/react';
import  styled  from "styled-components";
import { colors } from '../../styles/global';

export const StyForm = styled.form`
    display:flex ;
    flex-direction:column;
    justify-content: center;
    width: 80% ;
    max-width:60rem ;
    .bt-edit, .controls {
        display:flex ;
        flex-direction:row ;
        gap:1rem ;
        align-self:flex-end ;
        cursor:pointer ;
    }
    main{
        display: flex;
        flex-direction:column;
        gap:8px;
        padding:1rem 10px ;
        border:1px solid black ;
        border-radius:8px ;
        background-color:${colors.primaryLight} ;
        .header{
            display:flex ;
            flex-direction:row;
            justify-content:space-between;
            gap:12px ;
            span{
                font-weight:bold ;
                color:${colors.white1}
            }
            
            div{
                display:flex ;
                flex-direction:row;
                gap:12px ;
                .date{
                    color:${colors.white2};
                }
            }
        }
        input,textarea,select{
            background-color:whitesmoke ;
            min-width:6rem ;
            &:focus{
                background-color:white ;
            }
        }
        .content{
            display:flex;
            flex-direction:column;
            align-items:center ;
            gap:1rem;
            background-color:${colors.white1} ;
            padding: 1rem 0;
            border-radius: 0 0 8px 8px;
            overflow-y:auto ;
            max-height:12rem ;

            & > div{
                display:flex;
                flex-direction:row;
                width:100% ;
                justify-content:space-around;
                div{
                    display:flex ;
                    flex-direction:row ;
                    align-items:center ;
                    justify-content:center ;
                }
            }
            .description{
                width: 80% ;
            }
        }
    }



`
export const StyPenalCodeDetails = styled.div`
    display:flex ;
    flex-direction:column ;
    align-items:center;
    width:100% ;
`