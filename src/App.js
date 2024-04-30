import styled from 'styled-components';
import Header from './components/Header'
import Introduction from './components/Introduction'
import Feature from './components/Feature'

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
      </StyledMain>
    </>
  );
}

export default App;
