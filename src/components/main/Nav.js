import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Nav({ setMobileNavActive }) {
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
          {/* <a
            href="https://www.linkedin.com/in/luke-meadows-8b1735233/"
            target="blank"
          >
            <i className="icon-linkedin" />
          </a>
          <a style={{ marginBottom: '-0.25rem' }}>
            <i className="icon-instagram" />
          </a> */}
          <a href="https://github.com/luke-meadows" target="blank">
            <i className="icon-git" />
          </a>
        </Socials>
        <div className="nav-links">
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
        <button
          className="mobile-menu-button"
          onClick={() => setMobileNavActive(true)}
        >
          <i className="icon-menu" />
        </button>
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
    &:hover,
    &:focus {
      color: var(--white);
    }
  }
  .mobile-menu-button {
    display: none;
    background: none;
    border: none;
  }
  // MEDIA QUERY
  @media only screen and (max-width: 1000px) {
    padding: 3rem 2rem;
    .nav-links {
      a {
        font-size: 1.2rem;
        margin: 0 1rem;
      }
    }
    i {
      font-size: 2.5rem;
      &:hover {
        color: var(--black);
      }
    }
    /* .mobile-menu-button {
      display: block;
    } */
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  a {
    margin: 0 0.5rem;
  }
  // MEDIA QUERY
  @media only screen and (max-width: 1000px) {
    a {
      margin: 0 0.2rem;
    }
  }
`;
