import { Link } from 'react-router-dom';
import styled from 'styled-components';
export default function BackButton({ toggleProjectView }) {
  return (
    <StyledButton to="/work" onClick={toggleProjectView}>
      <i className="icon-left-open-big" />
      Back to projects
    </StyledButton>
  );
}

const StyledButton = styled(Link)`
  font-size: 0.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: var(--almond);
  font-family: 'Poppins';
  padding: 2rem 0;
  cursor: pointer;
  transition: var(--hover-transition);
  position: fixed;
  right: 2rem;
  top: 0;
  z-index: 2;
  &:hover {
    color: var(--almond);
  }
  i {
    font-size: 0.9rem;
    margin-right: 0.5rem;
  }
`;
