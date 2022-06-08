import styled from 'styled-components';
export default function Loading() {
  return (
    <StyledLoading>
      <p>Loading ...</p>
    </StyledLoading>
  );
}

const StyledLoading = styled.div`
  position: fixed;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  z-index: 0;
  color: var(--black);
  p {
    font-size: 1.5rem;
  }
`;
