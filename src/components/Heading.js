import styled from 'styled-components';
import { motion } from 'framer-motion';
export default function Heading({ children, color }) {
  return (
    <Text
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      color={color}
    >
      {children}
    </Text>
  );
}

const Text = styled(motion.h1)`
  color: ${(props) => `var(--${props.color})`};
  font-size: 8rem;
  font-weight: 500;
  word-spacing: -10px;
  line-height: 1;
  opacity: 0;
  position: relative;
  z-index: 3;
  @media only screen and (max-width: 900px) {
    font-size: 7rem;
  }
  @media only screen and (max-width: 350px) {
    font-size: 5rem;
  }
`;
