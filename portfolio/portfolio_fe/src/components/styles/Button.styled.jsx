import styled from "styled-components";

export const Button = styled.button`

    width: 250px;
    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0,0,0,0.8);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 30px;
    background-color: ${({theme}) => theme.colors.button};
    color: #FFF;

    &:hover{
        opacity: 0.9;
        transform: scale(.98);
        transition: ease-out;

    }

`