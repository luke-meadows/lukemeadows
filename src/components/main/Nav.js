import styled from 'styled-components';
import { Link } from 'react-router-dom';
export default function Nav() {
  return (
    <StyledNav>
      <Socials>
        <span>
          <i className="icon-linkedin" />
        </span>
        <span style={{ marginBottom: '-0.25rem' }}>
          <i className="icon-instagram" />
        </span>
      </Socials>
      <div>
        <Link className="active" to="/">
          home
        </Link>
        <Link to="/about">about</Link>
        <Link to="/work">work</Link>
        <Link to="/contact">contact</Link>
      </div>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 6rem;
  z-index: 2;
  a {
    font-weight: 500;
    margin: 0 0.8rem;
    font-size: 0.8rem;
    position: relative;
    transition: var(--hover-transition);
    &:hover {
      color: var(--white);
    }
  }
  .active {
    color: var(--white);
  }
  .active::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 25px;
    border-radius: 2px;
    background-color: var(--white2);
    left: 50%;
    bottom: -4px;
    transform: translateX(-50%);
  }
  i {
    font-size: 1.5rem;
    color: var(--black);
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
`;
