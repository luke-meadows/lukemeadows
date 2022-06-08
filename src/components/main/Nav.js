import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [active, setActive] = useState('');
  const location = useLocation();
  useEffect(() => {
    setActive(location.pathname);
  }, [location]);
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
        <Link className={active === '/' ? 'active' : ''} to="/">
          home
        </Link>
        <Link className={active === '/about' ? 'active' : ''} to="/about">
          about
        </Link>
        <Link className={active === '/work' ? 'active' : ''} to="/work">
          work
        </Link>
        <Link className={active === '/contact' ? 'active' : ''} to="/contact">
          contact
        </Link>
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
    transition-delay: 1000;
    &:hover {
      color: var(--white);
    }
  }
  .active {
    color: var(--white);
  }
  /* .active::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 2px;
    border-radius: 2px;
    background-color: var(--white2);
    left: 50%;
    bottom: -4px;
    transform: translateX(-50%); 
  }*/
  i {
    font-size: 1.5rem;
    color: var(--black);
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
`;
