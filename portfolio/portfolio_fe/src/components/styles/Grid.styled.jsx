import styled from "styled-components"

export const Grid = styled.div `   
    height:500px;
    padding: 0 20px;
    padding-top: 100px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    overflow: visible;


    p{

        grid-column: 1fr;
    }

    

`
export const ConsoleIMG  = styled.img`
        display: flex;
        align-items: center;
        border-radius: 25px;
        object-fit: contain;
        max-width: 900px;
        max-height: 600px;
        margin-left: auto;
        margin-right: auto;

`