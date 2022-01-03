import { Container } from "./styles/Container.styled";
import { StyledAbout, MeIMG, StyledTags, RevStyledTags, Title, abtMeP } from "./styles/AboutMe.styled";

export default function AboutMe() {
    return (
        <StyledAbout>
        <Container>
            <Title>who am i?</Title>
            <abtMeP> my name is jean-luc, and I have been aroudn the world throughout my life. some of the things i enjoy doing, are 
                coding, cooking, and making pottery. i wanted to make this website to showcase mainly those few things. i have a 
                master's in software engineering, which built up my foundation in many different areas of tech. in the world of 
                food, i have been lucky enough to have an amazing chef, my mother, and now my ultimate goal is to 
                make food half as good as hers, and maybe one day open a restaurant. finally, pottery is a relatively new hobby for me
                but it is one very closely tied to food - what you eat on is almost as important as what you eat.  
            </abtMeP>
            
            <StyledTags>
            <MeIMG src='./images/vase.png' alt=''/>
            <p> my name is jean-luc, and I have been aroudn the world throughout my life. some of the things i enjoy doing, are 
                coding, cooking, and making pottery. i wanted to make this website to showcase mainly those few things. i have a 
                master's in software engineering, which built up my foundation in many different areas of tech. in the world of 
                food, i have been lucky enough to have an amazing chef, my mother, and now my ultimate goal is to 
                make food half as good as hers, and maybe one day open a restaurant. finally, pottery is a relatively new hobby for me
                but it is one very closely tied to food - what you eat on is almost as important as what you eat.  
            </p>
        
            </StyledTags>

            <RevStyledTags>
            <p> my name is jean-luc, and I have been aroudn the world throughout my life. some of the things i enjoy doing, are 
                coding, cooking, and making pottery. i wanted to make this website to showcase mainly those few things. i have a 
                master's in software engineering, which built up my foundation in many different areas of tech. in the world of 
                food, i have been lucky enough to have an amazing chef, my mother, and now my ultimate goal is to 
                make food half as good as hers, and maybe one day open a restaurant. finally, pottery is a relatively new hobby for me
                but it is one very closely tied to food - what you eat on is almost as important as what you eat.  
            </p>
            <MeIMG id='revImg' src='./images/food.png' alt=''/>
            
        
            </RevStyledTags>
            
            <StyledTags>
            <MeIMG src='./images/pc.png' alt=''/>
            <p> my name is jean-luc, and I have been aroudn the world throughout my life. some of the things i enjoy doing, are 
                coding, cooking, and making pottery. i wanted to make this website to showcase mainly those few things. i have a 
                master's in software engineering, which built up my foundation in many different areas of tech. in the world of 
                food, i have been lucky enough to have an amazing chef, my mother, and now my ultimate goal is to 
                make food half as good as hers, and maybe one day open a restaurant. finally, pottery is a relatively new hobby for me
                but it is one very closely tied to food - what you eat on is almost as important as what you eat.  
            </p>
        
            </StyledTags>
            {/* Image and text saying who I am, what I do
            -   text with icons for each thing I do; cs, food, pottery */}
        </Container>
        </StyledAbout>
    )
}
