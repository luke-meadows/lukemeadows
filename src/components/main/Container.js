import styled from 'styled-components';
export default function Container({
  children,
  color,
  bg,
  padding = '12rem 6rem',
}) {
  return (
    <StyledContainer color={color} bg={bg} padding={padding}>
      {children}
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  padding: ${(props) => props.padding};
  color: ${(props) => `var(--${props.color})`};
  background: ${(props) => `var(--${props.bg})`};
  position: relative;
`;
