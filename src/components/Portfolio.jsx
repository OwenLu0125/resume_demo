import styled from 'styled-components';

const StyledSection = styled.section`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  display: flex;
  gap: 24px;
  overflow: hidden;
`;

const Portfolio = () => {
  return (
    <>
      <StyledSection>
        <img
          src='/images/portfolio/1.png'
          alt='portfolio1'
          width='320'
          height='320'
        />
        <img
          src='/images/portfolio/2.png'
          alt='portfolio2'
          width='320'
          height='320'
        />
        <img
          src='/images/portfolio/3.png'
          alt='portfolio3'
          width='320'
          height='320'
        />
        <img
          src='/images/portfolio/1.png'
          alt='portfolio4'
          width='320'
          height='320'
        />
        <img
          src='/images/portfolio/2.png'
          alt='portfolio5'
          width='320'
          height='320'
        />
      </StyledSection>
    </>
  );
};

export default Portfolio;
