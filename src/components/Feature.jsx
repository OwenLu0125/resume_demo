import styled from 'styled-components';

const StyledSection = styled.section`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  margin: 60px auto;
`;

const StyledGradientIcon = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  background: linear-gradient(to right, #ff2ac3, #5000ff);
`;

const StyledH3 = styled.h3`
  font-size: 36px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 12px;
  text-align: center;
`;

const StyledP = styled.p`
  text-align: center;
`;

const StyledFeatureItem = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 24px;
`;
const StyledFeatureCard = styled.div`
  border-left: solid 1px white;
  padding: 0 24px;
`;

const StyledDigital = styled.p`
  font-size: 28px;
  font-weight: 600;
`;

const StyledH4 = styled.h4`
  font-size: 20px;
  font-weight: 500;
`;

const StyledLinkIcon = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Feature = () => {
  return (
    <StyledSection>
      <StyledGradientIcon>
        <img src='/images/icon/zap-fast.svg' alt='zap-fast' />
      </StyledGradientIcon>
      <StyledH3>打造你的專屬網站</StyledH3>
      <StyledP>
        只要是你任何想到的 跟著一起打造設計UI介面以及你專屬的網站
      </StyledP>
      <StyledFeatureItem>
        <StyledFeatureCard>
          <StyledDigital>400 +</StyledDigital>
          <StyledH4>已合作多家廠商</StyledH4>
          <StyledLinkIcon href='#'>
            了解更多
            <img src='/images/icon/arrow-right.svg' alt='arrow-right' />
          </StyledLinkIcon>
        </StyledFeatureCard>
        <StyledFeatureCard>
          <StyledDigital>600 %</StyledDigital>
          <StyledH4>投資報酬率</StyledH4>
          <StyledLinkIcon href='#'>
            了解更多
            <img src='/images/icon/arrow-right.svg' alt='arrow-right' />
          </StyledLinkIcon>
        </StyledFeatureCard>
        <StyledFeatureCard>
          <StyledDigital>10 k</StyledDigital>
          <StyledH4>已合作多家廠商</StyledH4>
          <StyledLinkIcon href='#'>
            了解更多
            <img src='/images/icon/arrow-right.svg' alt='arrow-right' />
          </StyledLinkIcon>
        </StyledFeatureCard>
        <StyledFeatureCard>
          <StyledDigital>400 +</StyledDigital>
          <StyledH4>滿星好評</StyledH4>
          <StyledLinkIcon href='#'>
            了解更多
            <img src='/images/icon/arrow-right.svg' alt='arrow-right' />
          </StyledLinkIcon>
        </StyledFeatureCard>
      </StyledFeatureItem>
    </StyledSection>
  );
};

export default Feature;
