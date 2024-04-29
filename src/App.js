import Header from './components/Header'
import Introduction from './components/Introduction'
import styled from 'styled-components';

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
      </StyledMain>
    </>
  );
}

export default App;
