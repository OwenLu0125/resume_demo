import styled from 'styled-components';

const Header = styled.header`
  background-color: black;
  color: white;
  font-size: 18px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: end;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;
`;

const Link = styled.a`
  padding: 10px 24px;
  text-wrap: nowrap;
`;

const LinkIcon = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LinkBorder = styled(Link)`
  display: flex;
  justify-content: center;
  border: solid 1px #fb46cb;
  color: #fb46cb;
  border-radius: 99px;
`;

const HeaderComp = () => {
  return (
    <Header>
      <Nav>
        <LinkIcon href='/test'>
          作品集
          <img src='/images/icon/chevron-down.svg' alt='chevron-down' />
        </LinkIcon>
        <LinkIcon href='/test'>
          關於我
          <img src='/images/icon/chevron-down.svg' alt='chevron-down' />
        </LinkIcon>
        <LinkIcon href='/test'>
          工作經驗
          <img src='/images/icon/chevron-down.svg' alt='chevron-down' />
        </LinkIcon>
        <LinkBorder href='/test'>聯絡我</LinkBorder>
      </Nav>
    </Header>
  );
};

export default HeaderComp;
