import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledH1 = styled.h1`
  font-size: 64px;
  font-weight: 700;
`;

const StyledIntroduce = styled.p`
  font-size: 24px;
  margin-bottom: 28px;
`;

const StyledLinkItem = styled.div`
  display: flex;
  gap: 24px;
`;

const StyledLink = styled.a`
  display: flex;
  justify-content: center;
  width: 180px;
  padding: 10px 24px;
  text-wrap: nowrap;
  border: solid 1px #fb46cb;
  color: #fb46cb;
  border-radius: 99px;
`;

const StyledLinkIcon = styled.a`
  display: flex;
  justify-content: center;
  text-wrap: nowrap;
  width: 180px;
  padding: 10px 24px;
  border-radius: 99px;
  background: linear-gradient(to right, #ff2ac3, #5000ff);
`;

const IntroductionInnerDiv = styled.div`
  flex: 1;
`;

const Introduction = () => {
  return (
    <>
      <StyledSection>
        <IntroductionInnerDiv>
          <StyledH1>Hi 我是呂沛騏</StyledH1>
          <StyledIntroduce>
            我是位UI設計
            也是對設計愛好者，致力於打造具有吸引力與易用性的界面設計以及追求使用者體驗的完美平衡
          </StyledIntroduce>
          <StyledLinkItem>
            <StyledLink href='#'>履歷</StyledLink>
            <StyledLinkIcon href='#'>
              聯繫我
              <img
                src='/images/icon/chat-bubble-outline.svg'
                alt='chat-bubble-outline'
              />
            </StyledLinkIcon>
          </StyledLinkItem>
        </IntroductionInnerDiv>
        <div>
          <img src='/images/avatar.png' alt='呂沛騏頭貼' />
        </div>
      </StyledSection>
    </>
  );
};

export default Introduction;
