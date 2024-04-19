import styled from 'styled-components';

const Section = styled.section`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

const H3 = styled.h3`
  font-size: 36px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 12px;
  text-align: center;
`;

const P = styled.p`
  text-align: center;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  gap: 24px;
`;

const FeatureCard = styled.div`
  border-left: solid 1px white;
  padding: 0 24px;
`;

const Digital = styled.p`
  font-size: 28px;
  font-weight: 600;
`;

const DigitalContent = styled.h4`
  font-size: 20px;
  font-weight: 500;
`;

const LinkIcon = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const GradientIcon = styled.div`
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

const Feature = () => {
  return (
    <Section className='feature'>
      <GradientIcon>
        <img src='/images/icon/zap-fast.svg' alt='zap-fast' />
      </GradientIcon>
      <H3 className='feature-title'>打造你的專屬網站</H3>
      <P className='feature-discription'>
        只要是你任何想到的 跟著一起打造設計UI介面以及你專屬的網站
      </P>
      <Div className='feature-item'>
        <FeatureCard>
          <Digital>400 +</Digital>
          <DigitalContent>已合作多家廠商</DigitalContent>
          <LinkIcon href='/test'>
            了解更多
            <img src='/images/icon/arrow-right.svg' alt='arrow-right' />
          </LinkIcon>
        </FeatureCard>
        <FeatureCard>
          <Digital>600 %</Digital>
          <DigitalContent>投資報酬率</DigitalContent>
          <LinkIcon href='/test'>
            了解更多
            <img src='/images/icon/arrow-right.svg' alt='arrow-right' />
          </LinkIcon>
        </FeatureCard>
        <FeatureCard>
          <Digital>10 k</Digital>
          <DigitalContent>已合作多家廠商</DigitalContent>
          <LinkIcon href='/test'>
            了解更多
            <img src='/images/icon/arrow-right.svg' alt='arrow-right' />
          </LinkIcon>
        </FeatureCard>
        <FeatureCard>
          <Digital>400 +</Digital>
          <DigitalContent>滿星好評</DigitalContent>
          <LinkIcon href='/test'>
            了解更多
            <img src='/images/icon/arrow-right.svg' alt='arrow-right' />
          </LinkIcon>
        </FeatureCard>
      </Div>
    </Section>
  );
};

export default Feature;
