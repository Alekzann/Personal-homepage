import { Container, Ul, ListItem, H2 } from "./Container/styled.js";
import author from "./images/author.jpg";
import message from "./images/Message.png";
import gitIcon from "./images/Github_on focus LM.svg";
import {
  MainContainer,
  H1,
  Img,
  InternalContainer,
  ButtonHire,
  LeadParagraph,
  Caption,
} from "./MainContainer/styled.js";
import { Portfolio, PortfolioSectionName, PortfoliosHeader } from "./Portfolio/styled.js";
import { Tile, TileContent, TileDemo, TileHeader, TilesContainer } from "./Tile/styled.js";

function App() {
  return (
    <>
      <MainContainer>
        <Img src={author} alt="Author of this project" />
        <InternalContainer>
          <Caption> THIS IS</Caption>
          <H1>Oleksandr Riaboshapka</H1>
          <LeadParagraph> Who i am "here should be some text"</LeadParagraph>
          <ButtonHire>
            {" "}
            <img src={message} alt="" /> Hire me
          </ButtonHire>
        </InternalContainer>
      </MainContainer>
      <Container>
        <H2> My skillset includes 🛠️ </H2>

        <Ul>
          <ListItem>Semantic & accessible HTML</ListItem>
          <ListItem>Responsive Web Design</ListItem>
          <ListItem>Teamwork</ListItem>
          <ListItem>Markdown</ListItem>
          <ListItem>Immutability</ListItem>
          <ListItem>CSS BEM convention</ListItem>
          <ListItem>CSS Grid</ListItem>
          <ListItem>CSS Flexbox</ListItem>
          <ListItem>React Router</ListItem>
          <ListItem>Redux-Saga</ListItem>
          <ListItem>GitHub Pull Requests & Review</ListItem>
          <ListItem>Working with API (fetch, axios)</ListItem>
          <ListItem>Error handling</ListItem>
          <ListItem>React Hooks</ListItem>
          <ListItem>Redux (Toolkit)</ListItem>
          <ListItem>Promises, Async/Await</ListItem>
          <ListItem>Git</ListItem>
          <ListItem>React</ListItem>
          <ListItem>NPM</ListItem>
          <ListItem>Scrum</ListItem>
          <ListItem>Trello</ListItem>
          <ListItem>JavaScript: ES6+</ListItem>
          <ListItem>BEM</ListItem>
        </Ul>
      </Container>
      <Container>
        <H2>What I want to learn next 🤐</H2>
        <Ul>
          <ListItem>TypeScript</ListItem>
          <ListItem>JS classes</ListItem>
          <ListItem>Node.js</ListItem>
          <ListItem>Cypress</ListItem>
          <ListItem>React Context</ListItem>
          <ListItem>Unit testing</ListItem>
        </Ul>
      </Container>
      <Portfolio>
        <PortfoliosHeader>
          <img src={gitIcon} alt="" />
          <PortfolioSectionName>Portfolio</PortfolioSectionName>
          <LeadParagraph>My recent projects</LeadParagraph>
        </PortfoliosHeader>
        <TilesContainer>
          <Tile>
            <TileHeader> Currency-Converter </TileHeader>
            <TileContent>
              Description of my currency-converter project
              Description of my currency-converter project
              Description of my currency-converter project
              Description of my currency-converter project
            </TileContent>
            <TileDemo> Demo: Link to my project </TileDemo>
            <TileContent> Code: link to gitHub repository </TileContent>
          </Tile>
          <Tile>
            <TileHeader> Currency-Converter </TileHeader>
            <TileContent>
              Description of my currency-converter project
              Description of my currency-converter project
              Description of my currency-converter project
              Description of my currency-converter project
            </TileContent>
            <TileDemo> Demo: Link to my project </TileDemo>
            <TileContent> Code: link to gitHub repository </TileContent>
          </Tile>
          <Tile>
            <TileHeader> Currency-Converter </TileHeader>
            <TileContent>
              Description of my currency-converter project
              Description of my currency-converter project
              Description of my currency-converter project
              Description of my currency-converter project
              </TileContent>
            <TileDemo> Demo: Link to my project </TileDemo>
            <TileContent> Code: link to gitHub repository </TileContent>
          </Tile>
          <Tile>
            <TileHeader> Currency-Converter </TileHeader>
            <TileContent>
              Description of my currency-converter project
              Description of my currency-converter project
              Description of my currency-converter project
              Description of my currency-converter project
            </TileContent>
            <TileDemo> Demo: Link to my project </TileDemo>
            <TileContent> Code: link to gitHub repository </TileContent>
          </Tile>
        </TilesContainer>
      </Portfolio>
    </>
  );
}

export default App;
