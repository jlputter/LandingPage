import styled from "styled-components"

export const StyledFooter = styled.section`
    background-color: ${({theme}) => theme.colors.footer}; 
    padding: 0;
    padding-top: 25px;
    margin-top: 50px;
    height:300px;
    `

export const SocialIcons = styled.div`
        display: flex;
        flex-direction: row;
        padding-right: 20px;



        img{
            height: 100px;
        }
    `