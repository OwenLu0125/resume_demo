import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  margin: 60px auto;
`;

const SkillInnerDiv = styled.div`
  flex: 1;
`;

const StyledH2 = styled.h2`
  font-size: 36px;
  font-weight: 600;
`;
const StyledSkillContent = styled.p`
  margin: 20px 0;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 180px;
  padding: 10px 24px;
  text-wrap: nowrap;
  border: solid 1px #fb46cb;
  color: #fb46cb;
  border-radius: 99px;
`;

const Skill = () => {
  return (
    <>
      <StyledSection>
        <SkillInnerDiv>
          <StyledH2>網站改版設計</StyledH2>
          <StyledSkillContent>
            致力於幫助您重新改版
            提高網站的易用性，吸引更多的訪客並轉化為潛在客戶。我們也希望強化品牌形象，使網站與我們公司的價值觀和使命更加一致。
          </StyledSkillContent>
          <StyledLink href='#'>
            <img
              src='/images/icon/chat-bubble-solid.svg'
              alt='chat-bubble-solid'
            />
            了解更多
          </StyledLink>
        </SkillInnerDiv>
        <SkillInnerDiv>
          <img src='/images/mac-air.png' alt='mac-air' />
        </SkillInnerDiv>
      </StyledSection>
    </>
  );
};

export default Skill;
