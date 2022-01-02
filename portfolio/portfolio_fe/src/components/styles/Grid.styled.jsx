import styled from "styled-components"

export const Grid = styled.div `   
    height:575px;
    padding: 0 20px;
    padding-top: 100px;
    display: grid;
    overflow: visible;
    grid-template-columns: 1fr 2fr;
    grid-gap: 2em;


    h1{
        font-size: 2.5em;
        margin-top: 0;
        color: ${({theme}) => theme.colors.body};
        border-bottom: 2px solid;

    }
    p{
        padding-top: 0;
        margin-top: 0;
        padding-bottom: 20px;
        font-size: 1.12em;
    }

    button{
        color: ${({theme}) => theme.colors.body};
        border-radius: 25px;
        border-color: ${({theme}) => theme.colors.button};
        background-color: inherit;
        font-size: 1.5em;
        padding: 15px 60px;
        cursor:pointer
      
    }
    button:hover{

        opacity: 0.9;
        transform: scale(.98);
        transition: ease-out;

    }


    }

    

`
export const ConsoleIMG  = styled.img`
        align-items: center;
        border-radius: 25px;
 
        max-width: 1500px;
        max-height: 500px;
        margin-left: auto;
        margin-right: auto;


`