import styled from 'styled-components';
import Heading from '../Heading';
import Container from '../main/Container';
import Skills from '../about/Skills';
import { motion } from 'framer-motion';

import Hero from '../Hero';
import TopBlurb from '../about/TopBlurb';
import PageTransitionDiv from '../main/PageTransitionDiv';
import Footer from '../main/Footer';
export default function About() {
  return (
    <PageTransitionDiv>
      <Hero bg="almond" chevron="black">
        <Heading color="black">about.</Heading>
      </Hero>
      <AboutContainer>
        <TopBlurb />
        <Skills />
      </AboutContainer>
      <Footer />
    </PageTransitionDiv>
  );
}

const AboutContainer = styled.div`
  padding: 8rem 0rem 0rem 0rem;
  color: var(--white);
  background-color: var(--black);
`;
