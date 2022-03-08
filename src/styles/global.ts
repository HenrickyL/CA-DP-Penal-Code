import { createGlobalStyle } from "styled-components";

export const colors = {
  scrollBarActive: 'rgba(0, 0, 0, 0.5)',
  scrollBarTumb: 'rgba(0, 0, 0, 0.25)',

  background: '#EBE9E3',

  primary:'#385889',
  primaryLight:'#4072A7',
  secundary: '#62766B',


  base: '#736259',
  white1: '#EAE7DF',
  white2: '#CCD5D7',
  white3: '#E1E0D7',


}


export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-user-drag: none;
    font-family: sans-serif;
    scroll-behavior: smooth;
  }  

  

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media(max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: ${colors.background};
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /*/// ScrollBar ///*/

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    transition: 0.3s;

  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent; 
    
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${colors.scrollBarTumb}; 
      border-radius:4px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.scrollBarActive}; 

  }


  /*/// Select ///*/

  .not-selected {
      /* seleção */
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
       -khtml-user-select: none; /* Konqueror HTML */
         -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently
                                 supported by Chrome, Edge, Opera and Firefox */
}

`;
