import styled from "styled-components"

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.header}; 
    padding: 40px 0;
    margin: 0 auto;


`

export const Nav = styled.nav`

    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    ul {
    display: flex;
    justify-content: space-between;
    margin: 0px;
    padding: 0px;
    list-style: none;
    color: #FFF;
    }

    li{
        padding: 10px 15px 0 0;

    }
    
    a{
        padding: 10px;
        margin: 0 5px;
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

    

`

export const Name = styled.h1`

    color: #FFF;
    

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