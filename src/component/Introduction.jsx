import styled from 'styled-components';

const Section = styled.section`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

const H1 = styled.h1`
  font-size: 64px;
  font-weight: 700;
`;

const P = styled.p`
  font-size: 24px;
  margin-bottom: 28px;
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

const IntroductionDiv = styled.div`
  display: flex;
  align-items: center;
`;

const IntroductionInnerDiv = styled.div`
  flex: 1;
`;

const LinkItem = styled.div`
  display: flex;
  gap: 24px;
`;

const W180 = styled.a`
  width: 180px;
`;

const LinkGradient = styled(Link)`
  justify-content: center;
  border-radius: 99px;
  background: linear-gradient(to right, #ff2ac3, #5000ff);
`;

const Introduction = () => {
  return (
    <Section className='introduction'>
      <IntroductionDiv>
        <IntroductionInnerDiv>
          <H1>Hi 我是呂沛騏</H1>
          <P className='introduce'>
            我是位UI設計
            也是對設計愛好者，致力於打造具有吸引力與易用性的界面設計以及追求使用者體驗的完美平衡
          </P>
          <LinkItem>
            <W180 href='/test' className='link link-border'>
              履歷
            </W180>
            <LinkGradient href='/test' className='w-180 link link-icon'>
              聯繫我
              <img
                src='/images/icon/chat-bubble-outline.svg'
                alt='chat-bubble-outline'
              />
            </LinkGradient>
          </LinkItem>
        </IntroductionInnerDiv>
        <IntroductionInnerDiv>
          <img src='/images/avatar.png' alt='呂沛騏頭貼' />
        </IntroductionInnerDiv>
      </IntroductionDiv>
    </Section>
  );
};

export default Introduction;
