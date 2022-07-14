import styled from 'styled-components';
import { motion } from 'framer-motion';
import Man from '../imgs/hero-images/man.png';
import Woman from '../imgs/hero-images/woman.png';

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
      <div className="image left">
        <img src={Woman} />
      </div>
      <div className="image right">
        <img src={Man} />
      </div>
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

  .image {
    position: absolute;
    bottom: 0;
    height: 90vh;
    z-index: 2;
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

  @media only screen and (max-width: 1000px) {
    .left {
      display: none;
    }
    .right {
      opacity: 0.6;
      max-width: 100vw;
      max-height: 90vh;
    }
  }
`;
