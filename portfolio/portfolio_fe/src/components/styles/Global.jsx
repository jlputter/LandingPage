import { createGlobalStyle } from "styled-components";
//font-family: 'Noto Sans JP', sans-serif;
//font-family: 'Quicksand', sans-serif;

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300&family=Quicksand:wght@300&display=swap');

    

    * {
        box-sizing: border-box;
         
    }

    body {
        background: ${({theme}) => theme.colors.body};
        color: hsl(192. 100%, 9%);
        font-family: 'Quicksand', sans-serif; 
        font-size: 1.15em;
        margin: 0;
    }

    h1{
        font-size: 2em;
    }



`

export default GlobalStyles;