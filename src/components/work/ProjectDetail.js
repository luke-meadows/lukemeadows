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
    >
      <BackButton toggleProjectView={toggleProjectView} />
      <ProjectContent />
    </Container>
  );
}

const Container = styled(motion.section)`
  background: var(--white);
  color: var(--black);
`;

const Inner = styled(motion.section)``;
