import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Div = styled.div`
  flex: 1;
`;

const ContactForm = styled.div`
  margin: 0 80px 60px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Row = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextField = styled.input`
  border-radius: 0.5rem;
  padding: 8px 0;
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

const TextArea = styled.textarea`
  border-radius: 0.5rem;
  padding: 8px 0;
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
`;

const LinkGradientSquare = styled.a`
  text-align: center;
  padding: 8px 0;
  border-radius: 0.5rem;
  background: linear-gradient(to right, #ff2ac3, #5000ff);
`;

const Contact = () => {
  return (
    <Section className='contact'>
      <Div>
        <img src='/images/contact.png' alt='contact' />
      </Div>
      <ContactForm>
        <Row>
          <Column>
            <label for=''>姓氏</label>
            <TextField type='text' />
          </Column>
          <Column>
            <label for=''>名字</label>
            <TextField type='text' />
          </Column>
        </Row>
        <Column>
          <label for=''>Email 信件</label>
          <TextField type='text' />
        </Column>
        <Column>
          <label for=''>手機號碼</label>
          <TextField type='text' />
        </Column>
        <Column>
          <label for=''>訊息</label>
          <TextArea name='' id='' cols='30' rows='10'></TextArea>
        </Column>
        <Row>
          <input type='checkbox' name='' id='' />
          <label for=''>你是否同意我們的條款</label>
        </Row>
        <LinkGradientSquare href='/test'>聯繫我</LinkGradientSquare>
      </ContactForm>
    </Section>
  );
};

export default Contact;
