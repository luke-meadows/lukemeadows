import { motion } from 'framer-motion';
import styled from 'styled-components';
import Heading from '../Heading';
import Hero from '../Hero';
import Footer from '../main/Footer';
import PageTransitionDiv from '../main/PageTransitionDiv';
export default function Home() {
  return (
    <PageTransitionDiv>
      <Hero bg="almond">
        <Heading color="black">Luke.</Heading>
        <p
          style={{
            color: 'var(--black)',
            textAlign: 'right',
            paddingRight: '1rem',
            position: 'relative',
            zIndex: '3',
          }}
        >
          Web Developer
        </p>
      </Hero>
      <Footer />
    </PageTransitionDiv>
  );
}
