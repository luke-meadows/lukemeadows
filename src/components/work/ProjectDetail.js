import styled from 'styled-components';
import { motion } from 'framer-motion';
import SmoothScroll from '../../lib/SmoothScroll.component';
import BackButton from './BackButton';
import ProjectContent from './ProjectContent';
export default function ProjectDetail({ toggleProjectView }) {
  return (
    <Container
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ duration: 0.5 }}
      style={{
        top: window.scrollY,
      }}
    >
      <Inner>
        <BackButton toggleProjectView={toggleProjectView} />
        <ProjectContent />
      </Inner>
    </Container>
  );
}

const Inner = styled(motion.section)`
  position: relative;
  overflow-y: scroll;
  height: 100vh;
  width: 100vw;
`;
const Container = styled(motion.section)`
  position: fixed;
  height: 100vh;
  left: 0;
  background: var(--white);
  color: var(--black);
  overflow: scroll;
`;

const Content = styled.div``;
