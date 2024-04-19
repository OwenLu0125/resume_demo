import styled from 'styled-components';

const Section = styled.section`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

const H2 = styled.h2`
  font-size: 36px;
  font-weight: 600;
`;

const P = styled.p`
  margin: 20px 0;
`;

const LinkIcon = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  width: 180px;
`;

const Div = styled.div`
  flex: 1;
`;

const Skill = () => {
  return (
    <Section className='skill'>
      <Div>
        <H2 className='skill-title'>網站改版設計</H2>
        <P className='skill-content'>
          致力於幫助您重新改版
          提高網站的易用性，吸引更多的訪客並轉化為潛在客戶。我們也希望強化品牌形象，使網站與我們公司的價值觀和使命更加一致。
        </P>
        <LinkIcon href='/test' className='link-icon link-border'>
          <img
            src='/images/icon/chat-bubble-solid.svg'
            alt='chat-bubble-solid'
          />
          了解更多
        </LinkIcon>
      </Div>
      <Div>
        <img src='/images/mac-air.png' alt='mac-air' />
      </Div>
    </Section>
  );
};

export default Skill;
