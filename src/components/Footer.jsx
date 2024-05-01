import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: linear-gradient(to right, #ff2ac3, #5000ff);
  color: #d6bbfb;
`;

const StyledFooterBox = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
`;

const StyledBrand = styled.div`
  display: flex;
  gap: 20px;
`;

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <StyledFooterBox>
          <p>Pei-Chi, LU _ 2024</p>
          <StyledBrand>
            <a href='#'>
              <img src='/images/icon/twitter.svg' alt='twitter' />
            </a>
            <a href='#'>
              <img src='/images/icon/linkedin.svg' alt='linkedin' />
            </a>
            <a href='#'>
              <img src='/images/icon/facebook.svg' alt='facebook' />
            </a>
            <a href='#'>
              <img src='/images/icon/github.svg' alt='github' />
            </a>
            <a href='#'>
              <img src='/images/icon/vlive.svg' alt='vlive' />
            </a>
            <a href='#'>
              <img src='/images/icon/blog.svg' alt='blog' />
            </a>
          </StyledBrand>
        </StyledFooterBox>
      </StyledFooter>
    </>
  );
};

export default Footer;
