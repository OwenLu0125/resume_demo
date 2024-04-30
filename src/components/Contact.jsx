import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  gap: 24px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledDiv = styled.div`
  flex: 1;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 80px 60px;
`;

const StyledRow = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  border-radius: 0.5rem;
  padding: 8px 0;
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

const StyledTextArea = styled.textarea`
  border-radius: 0.5rem;
  padding: 8px 0;
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

const StyledLink = styled.a`
  text-align: center;
  padding: 8px 0;
  border-radius: 0.5rem;
  background: linear-gradient(to right, #ff2ac3, #5000ff);
`;

const Contact = () => {
  return (
    <>
      <StyledSection>
        <StyledDiv>
          <img src='/images/contact.png' alt='contact' />
        </StyledDiv>
        <StyledForm>
          <StyledRow>
            <StyledColumn>
              <label for=''>姓氏</label>
              <StyledInput type='text' />
            </StyledColumn>
            <StyledColumn>
              <label for=''>名字</label>
              <StyledInput type='text' />
            </StyledColumn>
          </StyledRow>
          <StyledColumn>
            <label for=''>Email 信件</label>
            <StyledInput type='text' />
          </StyledColumn>
          <StyledColumn>
            <label for=''>手機號碼</label>
            <StyledInput type='text' />
          </StyledColumn>
          <StyledColumn>
            <label for=''>訊息</label>
            <StyledTextArea name='' id='' cols='30' rows='10'></StyledTextArea>
          </StyledColumn>
          <StyledRow>
            <input type='checkbox' name='' id='' />
            <label for=''>你是否同意我們的條款</label>
          </StyledRow>
          <StyledLink href='#'>聯繫我</StyledLink>
        </StyledForm>
      </StyledSection>
    </>
  );
};

export default Contact;
