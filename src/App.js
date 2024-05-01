import styled from 'styled-components';
import Header from './components/Header'
import Introduction from './components/Introduction'
import Feature from './components/Feature'
import Skill from './components/Skill'
import Portfolio from './components/Portfolio'
import Information from './components/Information'
import Contact from './components/Contact'
import Footer from './components/Footer'


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
        <Contact />
        <Footer />
      </StyledMain>
    </>
  );
}

export default App;
