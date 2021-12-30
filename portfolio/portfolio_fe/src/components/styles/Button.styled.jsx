import styled from "styled-components";

export const Button = styled.button`

    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0,0,0,0.8);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 60px;
    background-color: ${({theme}) => theme.colors.button};
    color: #FFF;

    &:hover{
        opacity: 0.9;
        transform: scale(1.02);
        transition: ease-out;

    }

`