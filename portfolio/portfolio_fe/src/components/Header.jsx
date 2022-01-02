import { StyledHeader, Nav, Logo, Name } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Grid, ConsoleIMG } from "./styles/Grid.styled";
import { Button } from "./styles/Button.styled";

export default function Header() {
    return (
        <StyledHeader>
            <Container>
            <Nav>
                <Logo src='./images/logo.png' alt=''/>
                <Name> Jean-Luc. </Name>
                <ul>
                    <li><a>About Me</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Archive</a></li>
                </ul>
                <Button>Contact Me</Button>
            </Nav>
           
            <Grid>
                <p>
                    Welcome, this website will be home to all my projects and personal projects which I feel are worth sharing.
                </p>
                
                <ConsoleIMG src='./images/terminal.png' alt=''/>
            </Grid>
            </Container>
       
        </StyledHeader>
    )
}
