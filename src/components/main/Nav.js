import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [active, setActive] = useState('');
  const [shouldDisplay, setShouldDisplay] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes('/work/')) {
      setShouldDisplay(false);
    } else {
      setShouldDisplay(true);
    }
    setActive(location.pathname);
  }, [location]);
  return (
    <div>
      <StyledNav shouldDisplay={shouldDisplay}>
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
    </div>
  );
}

const StyledNav = styled.nav`
  display: ${(props) => (props.shouldDisplay === true ? 'flex' : 'none')};
  height: 5rem;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 6rem;
  z-index: 10;
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
  i {
    font-size: 1.5rem;
    color: var(--black);
    cursor: pointer;
    transition: var(--hover-transition);
    &:hover {
      color: var(--white);
    }
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
`;
