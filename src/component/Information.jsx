import styled from 'styled-components';

const Section = styled.section`
  max-width: 100%;
  height: 400px;
  margin-top: 60px;
  margin-bottom: 60px;
  background-image: url('/public/images/mail-banner.png');
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const P = styled.p`
  font-size: 36px;
  font-weight: 600;
`;

const A = styled.a`
  font-size: 28px;
`;

const Information = () => {
  return (
    <Section className='information'>
      <P className='slogan'>跟著我一起打造你的專屬網頁</P>
      <A href='mailto:Amber0332@gmail.com' className='mail'>
        Amber0332@gmail.com
      </A>
    </Section>
  );
};

export default Information;
