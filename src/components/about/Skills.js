import styled from 'styled-components';

export default function Skills() {
  return (
    <Container>
      <h3>Skills</h3>
      <Grid>
        <Column>
          <p className="header">Frontend</p>
          <p>React</p>
          <p>Next.js</p>
          <p>Tailwind.css</p>
          <p>Styled Components</p>
          <p>Framer Motion</p>
          <p>Redux</p>
          <p>Storybook</p>
        </Column>
        <Column>
          <p className="header">Database</p>
          <p>GraphQL</p>
          <p>Firebase</p>
          <p>MongoDB</p>
        </Column>
        <Column>
          <p className="header">Design</p>
          <p>Figma</p>
        </Column>
        <Column>
          <p className="header">Workflow</p>
          <p>Github</p>
          <p>Jira</p>
        </Column>
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  padding: 6rem;
  background: var(--almond);

  h3 {
    color: var(--white);
    font-size: 3rem;
    margin-bottom: 2rem;
    letter-spacing: 1px;
    font-weight: 500;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Column = styled.div`
  p {
    color: var(--white);
  }
  .header {
    color: var(--black);
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
  }
`;
