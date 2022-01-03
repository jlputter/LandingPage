import { Container } from "./styles/Container.styled";
import { StyledFooter, SocialIcons } from "./styles/Footer.styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default function AboutMe() {
    return (

        <StyledFooter>
            <Container>
                <SocialIcons>
                    <img src="./images/food.png"></img>
                    <img src="./images/food.png"></img>
                    <img src="./images/food.png"></img>
                    <i className="fab fa-linkedin-in"></i>
                    <FontAwesomeIcon icon={faCoffee} />
                </SocialIcons>
            </Container>
        </StyledFooter>
    )
}
