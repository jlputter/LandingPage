import { createGlobalStyle } from "styled-components";
//font-family: 'Noto Sans JP', sans-serif;
//font-family: 'Quicksand', sans-serif;

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap'); */
    

    * {
        box-sizing: border-box;
         
    }

    body {
        background: ${({theme}) => theme.colors.body};
        color: hsl(192. 100%, 9%);
        font-family: 'Roboto', sans-serif; 
        font-size: 1.15em;
        margin: 0;
    }

    h1{
        font-size: 2em;
    }

    p{
        color: ${({theme}) => theme.colors.body};
        font-family: 'Roboto', sans-serif; 
        font-weight: 100;
        font-size: 1.5em;
    }



`

export default GlobalStyles;