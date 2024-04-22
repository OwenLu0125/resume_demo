import styled from 'styled-components';

const Footer = styled.footer`
  background: linear-gradient(to right, #ff2ac3, #5000ff);
  color: #d6bbfb;
`;

const FooterBox = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
`;

const Brand = styled.div`
  display: flex;
  gap: 20px;
`;

const FooterComponent = () => {
  return (
    <Footer>
      <FooterBox>
        <p>Pei-Chi, LU _ 2024</p>
        <Brand>
          <a href='test'>
            <img src='/images/icon/twitter.svg' alt='twitter' />
          </a>
          <a href='test'>
            <img src='/images/icon/linkedin.svg' alt='linkedin' />
          </a>
          <a href='test'>
            <img src='/images/icon/facebook.svg' alt='facebook' />
          </a>
          <a href='test'>
            <img src='/images/icon/github.svg' alt='github' />
          </a>
          <a href='test'>
            <img src='/images/icon/vlive.svg' alt='vlive' />
          </a>
          <a href='test'>
            <img src='/images/icon/blog.svg' alt='blog' />
          </a>
        </Brand>
      </FooterBox>
    </Footer>
  );
};

export default FooterComponent;
