import styled from 'styled-components';
export default function ContactForm() {
  return (
    <Form>
      <input type="text" placeholder="Name" name="name" />
      <input type="email" placeholder="Email" name="email" />
      <textarea placeholder="Message..." name="message" />
      <button>Send</button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  input,
  textarea,
  button {
    background: none;
    margin: 1rem 0;
    font-size: 1.5rem;
    font-family: 'Poppins';
    padding-bottom: 0.5rem;
    outline: none;
    border: none;
    border-bottom: 2px solid var(--white);
    resize: none;
    color: var(--white);
    height: fit-content;
  }
  textarea {
    padding-bottom: 0;
  }
  button {
    border: 2px solid var(--almond);
    padding: 0.5rem 6rem;
    border-radius: 5px;
    background: var(--almond);
    width: fit-content;
    &:hover {
      transform: scale(1.01);
      cursor: pointer;
    }
  }
`;
