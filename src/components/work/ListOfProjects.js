import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
import SmoothScroll from '../../lib/SmoothScroll.component';
import Container from '../main/Container';
import ProjectDetail from './ProjectDetail';
export default function ListOfProjects({ bg, color }) {
  const [activeProject, setActiveProject] = useState(null);
  function toggleProjectView(e) {
    if (activeProject) {
      document.querySelector('body').style = 'overflowY: scroll';
      setActiveProject(null);
    } else {
      document.querySelector('body').style = 'overflow: hidden';
      setActiveProject('hello');
    }
  }

  return (
    <Container color="white" bg="black">
      <List>
        <h2 onClick={toggleProjectView}>Connected Home Systems</h2>
        <h2 onClick={toggleProjectView}>Above and Beyond Solutions</h2>
        <h2 onClick={toggleProjectView}>Bounce</h2>
        <h2 onClick={toggleProjectView}>Your pay</h2>
      </List>

      <AnimatePresence>
        {activeProject && (
          <ProjectDetail
            project="hello"
            toggleProjectView={toggleProjectView}
          />
        )}
      </AnimatePresence>
    </Container>
  );
}

const List = styled.div`
  h2 {
    text-align: center;
    font-weight: 500;
    line-height: 3;
    font-size: 4rem;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    &:hover {
      color: var(--almond);
      transform: scale(1.01);
    }
  }
`;
