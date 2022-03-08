import styled, { keyframes } from 'styled-components';


const slide = keyframes`
    to{
        left: -50%;
    }
`
const lightRed = keyframes`
    0%{
        box-shadow:  0 0 0 0  red;
    }
    65%{
        z-index:10 ;
        box-shadow:     -50px 100px  200px  15px red,
                        -50px 0  300px  50px   #F77,
                        -50px -100px  200px  15px   red;
    }
    100%{
        box-shadow:  0 0 0 0 red;
    }

`

const lightblue = keyframes`
    0%{
        box-shadow:  0 0 0 0  blue;
    }
    65%{
        z-index:10 ;
        box-shadow:     50px 100px  200px  15px blue,
                        90px 0  200px  25px   #77F,
                        50px -100px  200px  15px   blue;
    }
    100%{
        box-shadow:  0 0 0 0 blue;
    }

`

interface IStripProp{
    angle?: string;
}

export const StyStrip = styled.div<IStripProp>`
    position:absolute ;
    top:50% ;
    display:flex ;
    align-items:center ;
    justify-content:center ;
    padding: 5px 0 ;
    background-color: #FCC536;
    text-transform:uppercase;
    font-weight: bold ;
    font-size:20px ;
    transform: rotateZ(${p=>p.angle ? p.angle:'30deg'});
    width:200% ;
  
    .content{
        position:relative ;
        display: flex;
        flex-direction:row ;
        overflow: hidden;
        animation: ${slide} 100s linear infinite;
        left: 0;
        div{
            display:flex;
            flex-direction:row;
        }
    }

    span{
        display:flex;
        align-items:center;
        &::after{
            content:'';
            width: 5px;
            height: 5px;
            background-color:black;
            border-radius: 50%;
            margin: 0 5px;
        }
    }
    span:first-child{
        color:black;
       
        
    }

    span:last-child{
        color:red;
    }


`
const test = keyframes`
    0%{
        background-position: center left;
    }
    
    50%{
        background-position: center right;
    }

    100%{
        background-position: center left;
    }
`
export const StyNotFound = styled.div`
    display:flex ;
    position:relative ;
    justify-content:center ;
    width: 100%;
    height: 100%;
    overflow:hidden ;
    background-color:black ;
    transition:0.3s ;
    background-image:
                     radial-gradient(closest-corner circle at 100% 50%, red, 25%,rgba(255,0,0,0.5),rgba(255,0,0,0.3),rgba(255,0,0,0.1) ,transparent),
                     radial-gradient(closest-corner circle at 0% 50%,blue,25%,rgba(0,0,255,0.5) , rgba(0,0,255,0.3),rgba(0,0,255,0.1), transparent);
    background-size: 250% 250% ;
    background-position: center center;

    background-repeat:no-repeat ;

    animation: ${test} 2s ease-in-out infinite ;
    /* &::after{
        position:relative ;
        content: '';
        width: 30px ;
        height: 30px;
        background-color:red ;
        top: 50%;
        right: -35%;
        z-index:10;
        transition: 0.3s;
        border-radius:50% ;
        box-shadow:  0 0 0 0  red;
        filter: drop-shadow(0 0 1rem red);
        animation: ${lightRed} 1.5s linear infinite;
        transform:scale(2) ;

    }
    &::before{
        position:relative ;
        content: '';
        width: 10px ;
        height: 10px;
        background-color:blue ;
        top: 50%;
        left: -35%;
        filter: drop-shadow(0 0 1rem blue);
        animation: ${lightblue} 1.5s linear  infinite;
        transform:scale(2) ;
    } */

    h1{
        text-transform:uppercase;
        color: #868686;
        font-size:300px ;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
    }

`