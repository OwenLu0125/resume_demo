import './App.css';
import Header from './component/Header';
import Introduction from './component/Introduction';
import Feature from './component/Feature';
import Skill from './component/Skill';
import Portfolio from './component/Portfolio';
import Information from './component/Information';
import Contact from './component/Contact';
import styled from 'styled-components';

const Main = styled.main`
  background-color: black;
  color: white;
  font-size: 18px;
`;

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Introduction />
        <Feature />
        <Skill />
        <Portfolio />
        <Information />
        <Contact />
      </Main>
    </>
  );
};

export default App;
