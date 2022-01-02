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
                <Name> / / jean-luc. </Name>
                <ul>
                    <li><a>about me</a></li>
                    <li><a>projects</a></li>
                    <li><a>archive</a></li>
                </ul>
                <Button>contact</Button>
            </Nav>
           
            <Grid>
                <div>
                    <h1> what is this site?</h1>
                        <p>
                            this website will be home to all my projects and personal projects which I feel are worth sharing.
                        </p>
                        <p>
                            what does the value of 'foo' mean?
                        </p>
                        <a href="https://www.punipunijapan.com/juunin-tooiro/">
                        <button>read about it</button>
                        </a>
                </div>
                
                <ConsoleIMG src='./images/terminal.png' alt=''/>
            </Grid>
            </Container>
       
        </StyledHeader>
    )
}
