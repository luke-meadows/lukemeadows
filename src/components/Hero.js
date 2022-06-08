import styled from 'styled-components';
import { motion } from 'framer-motion';

const bounceTransition = {
  y: {
    yoyo: Infinity,
    ease: 'easeOut',
    duration: 0.7,
  },
};

export default function Hero({ children, bg, chevron }) {
  return (
    <Container bg={bg} chevron={chevron}>
      <div>{children}</div>
      {chevron && (
        <motion.i
          transition={bounceTransition}
          animate={{
            y: ['15%', '-15%'],
          }}
          className="icon-down-open-big"
        />
      )}
    </Container>
  );
}

const Container = styled.section`
  height: 100vh;
  width: 100vw;
  background: ${(props) => `var(--${props.bg})`};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  p {
    font-family: 'Poppins';
    font-size: 1.5rem;
  }
  i {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.8rem;
    color: ${(props) => `var(--${props.chevron})`};
  }
`;
