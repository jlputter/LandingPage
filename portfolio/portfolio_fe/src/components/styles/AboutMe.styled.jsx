import styled from "styled-components"

export const StyledAbout = styled.section`
    background-color: ${({theme}) => theme.colors.body}; 
    padding: 0;
    padding-top: 25px;
    margin: 0 auto;

    


`

export const StyledTags = styled.div`

        display: grid;
        height:auto;
        padding: 0 20px;
        padding-top: 20px;
        grid-template-columns: 1fr 4fr;
        grid-gap: 1em;
        align-items: center;

    p{
        color: #322d33;

    }   
`
export const RevStyledTags = styled.div`

        display: grid;
        height:auto;
        padding: 0 20px;
        padding-top: 20px;
        grid-template-columns: 4fr 1fr;
        grid-gap: 1em;
        align-items: center;

    p{
        color: #322d33;

    }   
`

export const MeIMG = styled.img`

    border-radius: 200px;
    border: 4px solid;
    border-color: ${({theme}) => theme.colors.button};
    height: 300px;



`