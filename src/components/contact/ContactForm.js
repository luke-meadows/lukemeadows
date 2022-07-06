import { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [buttonText, setButtonText] = useState({
    text: 'Send',
    icon: 'paper-plane-empty',
  });

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const phoneRef = useRef();

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    company: '',
  });
  const refs = {
    name: nameRef,
    email: emailRef,
    phone: phoneRef,
    message: messageRef,
  };

  function handleChange(e) {
    buttonText.text === 'Sent' &&
      setButtonText({
        text: 'Send',
        icon: 'paper-plane-empty',
      });
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  }

  function clearForm() {
    setInputs({
      name: '',
      email: '',
      phone: '',
      message: '',
      company: '',
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let shouldFormSubmit = true;
    Object.keys(inputs).forEach((key) => {
      if (key === 'company') return;
      if (inputs[key].length < 1) {
        refs[key].current.classList.add('nonono');
        shouldFormSubmit = false;
      }
    });
    if (!shouldFormSubmit) return;
    emailjs
      .send(
        'service_3skfwsi',
        'template_q403hfo',
        inputs,
        'user_tUEeIDH4Mdq7YlVipFLGr'
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
          clearForm();
          setButtonText({ text: 'Sent', icon: 'ok' });
          Object.keys(inputs).forEach((key) => {
            refs[key].current.classList.remove('nonono');
          });
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={inputs.name}
        onChange={handleChange}
        ref={nameRef}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={inputs.email}
        onChange={handleChange}
        ref={emailRef}
      />
      <input
        type="telephone"
        placeholder="Telephone"
        name="phone"
        value={inputs.phone}
        onChange={handleChange}
        ref={phoneRef}
      />
      <input
        type="text"
        placeholder="Company (optional)"
        name="company"
        value={inputs.company}
        onChange={handleChange}
      />
      <textarea
        placeholder="Message..."
        name="message"
        value={inputs.message}
        onChange={handleChange}
        ref={messageRef}
      />
      <button type="submit">
        {buttonText.text} <i className={`icon-${buttonText.icon}`} />
      </button>
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
    font-size: 1.2rem;
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
    padding-bottom: 0rem;
    height: 6rem;
  }
  button {
    border: 2px solid var(--white);
    padding: 0.5rem 3rem;
    border-radius: 5px;
    color: var(--white);
    width: fit-content;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    &:hover,
    &:focus {
      transform: scale(1.01);
      cursor: pointer;
      border: 2px solid var(--almond);
      color: var(--almond);
    }
    i {
      margin-left: 0.25rem;
      margin-bottom: 0.1rem;
      font-size: 1rem;
    }
    .icon-ok {
      color: green;
    }
  }
  .nonono {
    border-bottom: 2px solid var(--almond);
  }
  @media only screen and (max-width: 1000px) {
    input,
    textarea {
      border-radius: 0;
      padding: 1rem 0;
      font-size: 16px;
    }
    button {
      font-size: 16px;
      font-weight: 300;
    }
    input[type='search'] {
      -webkit-appearance: none;
    }
  }
`;
