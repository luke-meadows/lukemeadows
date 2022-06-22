import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProjectContent from '../work/ProjectContent';
import BackButton from '../work/BackButton';

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
