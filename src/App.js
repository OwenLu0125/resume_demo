import styled from 'styled-components';
import Header from './components/Header'
import Introduction from './components/Introduction'
import Feature from './components/Feature'
import Skill from './components/Skill'
import Portfolio from './components/Portfolio'
import Information from './components/Information'

const StyledMain = styled.main`
  background-color: black;
  color: white;
  font-size: 18px;
`;

function App() {
  return (
    <>
      <Header />
      <StyledMain>
        <Introduction />
        <Feature />
        <Skill />
        <Portfolio />
        <Information />
      </StyledMain>
    </>
  );
}

export default App;
