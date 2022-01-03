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
        padding: 0;
        padding-top: 20px;
        grid-template-columns: 4fr 1fr;
        grid-gap: 5em;
        align-items: center;
        

       

    p{
        color: #322d33;

    } 

    #revImg{

        background-color: #322d33;

    }
    
    
   
`

export const MeIMG = styled.img`


   
    border-radius: 200px;
    border: 4px solid;
    border-color: ${({theme}) => theme.colors.button};
    height: 300px;



`

export const Title = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Rock+3D&display=swap');

font-size: 3.5em;
font-family: 'Rock 3D', cursive;
text-align: center;
   
   



`