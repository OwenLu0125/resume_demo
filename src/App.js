import './App.css';
import styled from 'styled-components';
import Header from './component/Header';
import Introduction from './component/Introduction';
import Feature from './component/Feature';
import Skill from './component/Skill';
import Portfolio from './component/Portfolio';
import Information from './component/Information';
import Contact from './component/Contact';
import Footer from './component/Footer';

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
      <Footer />
    </>
  );
};

export default App;
