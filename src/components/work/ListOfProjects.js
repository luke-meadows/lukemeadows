import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../main/Container';
export default function ListOfProjects() {
  return (
    <Container color="white" bg="black" padding="6rem">
      <List>
        <Link to="/work/abs">Above and Beyond Solutions</Link>
        <Link to="/work/chs">Connected Home Systems</Link>
      </List>
    </Container>
  );
}

const List = styled.div`
  a {
    color: var(--white);
    text-align: center;
    font-weight: 500;
    line-height: 3;
    font-size: 4rem;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'SpecifyPERSONAL';
    &:hover {
      color: var(--almond);
      transform: scale(1.01);
    }
  }
`;
