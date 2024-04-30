import React from 'react';
import styled from 'styled-components';

const StyledInformation = styled.section`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  height: 400px;
  margin-top: 60px;
  margin-bottom: 60px;
  background-image: url('/images/mail-banner.png');
  background-size: 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StyledP = styled.p`
  font-size: 36px;
  font-weight: 600;
`;

const StyledLink = styled.a`
  font-size: 28px;
`;

const Information = () => {
  return (
    <>
      <StyledInformation>
        <StyledP>跟著我一起打造你的專屬網頁</StyledP>
        <StyledLink href='mailto:Amber0332@gmail.com'>
          Amber0332@gmail.com
        </StyledLink>
      </StyledInformation>
    </>
  );
};

export default Information;
