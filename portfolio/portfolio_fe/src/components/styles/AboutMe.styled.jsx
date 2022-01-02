import styled from "styled-components"

export const StyledAbout = styled.section`
    background-color: ${({theme}) => theme.colors.body}; 
    padding: 0;
    padding-top: 25px;
    margin: 0 auto;

    div{
        display: grid;
        height:auto;
        padding: 0 20px;
        padding-top: 20px;
        grid-template-columns: 1fr 4fr;
        grid-gap: 1em;
    }

    p{
        color: #322d33;
    }


`

export const MeIMG = styled.img`

    border-radius: 100px;
    border: 4px solid;
    border-color: ${({theme}) => theme.colors.button};
    height: 200px;



`