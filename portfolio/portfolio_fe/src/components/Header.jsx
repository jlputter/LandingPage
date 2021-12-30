import { StyledHeader, Nav, Logo, Name, ConsoleIMG } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";

export default function Header() {
    return (
        <StyledHeader>
            <Container>
            <Nav>
                <Logo src='./images/logo.png' alt=''/>
                <Name> Jean-Luc </Name>
                <ul>
                    <li><a>About Me</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Archive</a></li>
                </ul>
                <Button>Contact Me</Button>
            </Nav>
            <ConsoleIMG src='./images/terminal.png' alt=''/>
            </Container>
        </StyledHeader>
    )
}
