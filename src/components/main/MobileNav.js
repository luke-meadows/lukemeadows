import { useEffect } from 'react';
import styled from 'styled-components';
import { disableScroll, enableScroll } from '../../lib/scroll';
export default function MobileNav() {
  useEffect(() => {
    disableScroll();
    return () => enableScroll();
  }, []);
  return (
    <StyledMobileNav>
      <p>Home</p>
      <p>About</p>
      <p>Work</p>
      <p>Contact</p>
    </StyledMobileNav>
  );
}

const StyledMobileNav = styled.div`
  height: 100vh;
  width: 100vw;
  background: var(--black);
  color: var(--white);
  z-index: 10;
  position: sticky;
  top: 0;
  left: 0;
  p {
    font-size: 4rem;
  }
`;
