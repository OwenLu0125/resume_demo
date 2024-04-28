import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: black;
  color: white;
  font-size: 18px;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: end;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;
`;
const StyledLink = styled.a`
  padding: 10px 24px;
  text-wrap: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledLinkBorder = styled.a`
  padding: 10px 24px;
  text-wrap: nowrap;
  display: flex;
  justify-content: center;
  border: solid 1px #fb46cb;
  color: #fb46cb;
  border-radius: 99px;
`;

const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledLink href='#' class='link link-icon'>
            作品集
            <img src='/images/icon/chevron-down.svg' alt='chevron-down' />
          </StyledLink>
          <StyledLink href='#' class='link link-icon'>
            關於我
            <img src='/images/icon/chevron-down.svg' alt='chevron-down' />
          </StyledLink>
          <StyledLink href='#' class='link link-icon'>
            工作經驗
            <img src='/images/icon/chevron-down.svg' alt='chevron-down' />
          </StyledLink>
          <StyledLinkBorder href='#' class='link link-border'>
            聯絡我
          </StyledLinkBorder>
        </StyledNav>
      </StyledHeader>
    </>
  );
};

export default Header;
