import styled from 'styled-components';
import LeftHand from '../../imgs/footer-imgs/left-hand.png';
import RightHand from '../../imgs/footer-imgs/right-hand.png';
export default function Footer() {
  return (
    <StyledFooter>
      <div className="text">
        <h2>Luke Meadows</h2>
        <a className="footer-info-row">
          <i className="icon-mail" />
          <p>hello@lukemeadows.dev</p>
        </a>
        <a className="footer-info-row">
          <i className="icon-phone" />
          <p>07949 442844</p>
        </a>
        <a className="footer-info-row">
          <i className="icon-doc-text" />
          <p>Resume</p>
        </a>
      </div>
      <div className="footer-image left">
        <img src={LeftHand} alt="hand" />
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
  justify-content: center;
  color: var(--white);
  .text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    h2 {
      letter-spacing: 1px;
      margin-bottom: 1rem;
    }
  }
  .footer-info-row {
    display: flex;
    align-items: center;
    transition: var(--hover-transition);
    color: var(--white);
    margin: 0.25rem 0;
    cursor: pointer;
    i {
      margin-right: 0.5rem;
    }
    &:hover {
      color: var(--almond);
      a {
        color: var(--almond);
      }
    }
  }

  .footer-image {
    position: absolute;
    height: 16rem;
    img {
      height: 100%;
    }
  }
  .left {
    left: 0;
  }
  .right {
    right: 0;
  }
`;