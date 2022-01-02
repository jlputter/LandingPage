import styled from "styled-components"



export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.header}; 
    padding: 0;
    margin: 0 auto;


`

export const Nav = styled.nav`

    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-top: 20px;

    ul {
    display: flex;
    justify-content: space-between;
    margin: 0px;
    padding-right: 60px;
    list-style: none;
    color: #FFF;
    }

    li{
        padding: 10px 15px 0 0;

    }
    
    a{
        padding: 10px;
        margin: 0 5px;
        font-size: 1em;
    }
    
    a:hover{
       border-bottom:2px #FFF solid;
        
    }
    li:hover{
        transition: ease-in;
        cursor: pointer;
        transform: scale(1.04);

    }


`

export const Logo = styled.img`

    max-height: 70px;
    border-radius: 50px;
    

`

export const Name = styled.h1`
 

    color: #FFF;
    font-size: 2.4em;
    flex-grow: 1;
    padding-left: 30px;
    margin-top: 0px;
    margin-bottom: 0px;
    align-self: center;
    

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