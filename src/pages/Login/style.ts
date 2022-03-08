import { colors } from './../../styles/global';
import styled, { keyframes } from 'styled-components';

const gradient = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50%{
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`
export const StyForm = styled.form`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    border-radius:8px;
    background-color: ${colors.background} ;
    border:1px solid ${colors.secundary};
    padding: 2rem ;
    /* width: 50%;
    max-width: 50rem ; */
    margin-top: 5rem;


    div{
        display:flex ;
        justify-content:center ;
        flex-direction:column ;
        gap:1rem ;
        input{
            width: 25vw;
            min-width:10rem ;
            max-width:30rem ;
            border: 1px solid gray;
            background-color:whitesmoke ;
        }
        
    }
    h1{
        color: black;
        font-weight:bold;
        font-size:1.5rem;
    }

    
`

export const StyLogin = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center ;
    width:100% ;
    height:100% ;
    background: linear-gradient(45deg, ${colors.primary}, black,${colors.secundary});
    animation: ${gradient} 15s ease infinite;
    background-size: 400% 400%;
`