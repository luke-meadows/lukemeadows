import { useRef, useState } from 'react';
import styled from 'styled-components';
import LeftHand from '../../imgs/footer-imgs/left-hand.png';
import RightHand from '../../imgs/footer-imgs/right-hand.png';
export default function Footer() {
  const emailRef = useRef();
  const phoneRef = useRef();

  const [textContent, setTextContent] = useState({
    mail: 'hello@lukemeadows.dev',
    phone: '07949 442844',
  });

  const refs = {
    mail: emailRef,
    phone: phoneRef,
  };

  const wait = (amount = 0) =>
    new Promise((resolve) => setTimeout(resolve, amount));

  async function copyInfo(e) {
    const infoOption = e.currentTarget.dataset.info;
    const text = textContent[infoOption];
    navigator.clipboard.writeText(text);
    refs[infoOption].current.className = 'copied';
    refs[infoOption].current.textContent = 'Copied!';

    wait(2000).then(() => {
      refs[infoOption].current.textContent = text;
      refs[infoOption].current.className = '';
    });
  }

  return (
    <StyledFooter>
      <div className="footer-image left">
        <img src={LeftHand} alt="hand" />
      </div>
      <div className="text">
        <h2>Luke Meadows</h2>
        <div className="footer-info-link" data-info="mail" onClick={copyInfo}>
          <i className="icon-mail" />
          <p className="" ref={emailRef}>
            {textContent.mail}
          </p>
        </div>
        <div className="footer-info-link" data-info="phone" onClick={copyInfo}>
          <i className="icon-phone" />
          <p className="" ref={phoneRef}>
            {textContent.phone}
          </p>
        </div>
        {/* <a className="footer-info-link">
          <i className="icon-doc-text" />
          <p>Resume</p>
        </a> */}
      </div>

      <div className="footer-image right">
        <img src={RightHand} alt="hand" />
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: relative;
  height: 20rem;
  border-top: 2px solid var(--white);
  background: var(--black);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--white);
  .text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;

    width: fit-content;
    h2 {
      letter-spacing: 1px;
      margin-bottom: 1rem;
    }
  }
  .footer-info-link {
    display: flex;
    align-items: center;
    transition: var(--hover-transition);
    color: var(--white);
    margin: 0.25rem 0;
    cursor: copy;
    i {
      margin-right: 0.5rem;
    }
    &:hover {
      color: var(--almond);
      a {
        color: var(--almond);
      }
    }
    .copied {
      color: var(--almond);
      /* text-align: center; */
      width: 100%;
    }
  }

  .footer-image {
    height: 16rem;
    img {
      height: 100%;
    }
  }

  // MEDIA QUERY
  @media only screen and (max-width: 1000px) {
    height: fit-content;
    padding: 3rem 0;
    border-top: 1px solid var(--white);

    .text {
      margin: 0 2.5%;
      h2 {
        margin-bottom: 0.5rem;
      }
    }
    .footer-image {
      height: auto;
      width: 27.5%;
      img {
        width: 100%;
      }
    }
    .footer-info-link {
      &:hover {
        color: var(--white);
        a {
          color: var(--white);
        }
      }
    }
  }
`;
