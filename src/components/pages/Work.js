import { useState } from 'react';
import styled from 'styled-components';
import Heading from '../Heading';
import Hero from '../Hero';
import PageTransitionDiv from '../main/PageTransitionDiv';
import ListOfProjects from '../work/ListOfProjects';
export default function Work() {
  const [bg, color] = ['almond', 'black'];
  return (
    <PageTransitionDiv>
      <Hero bg={bg} chevron="black">
        <Heading color={color}>work.</Heading>
      </Hero>
      <ListOfProjects bg="white" color={color} />
    </PageTransitionDiv>
  );
}
