import styled from "styled-components";

const Title = styled.h1`
  font-size: 2.4rem;
  margin: 0;
  padding: 0;
  line-height: 3rem;
  color: ${props => props.theme.gray5};
  font-weight: 900;
  @media (max-width: 500px) {
    font-size: 2.3rem;
  }
`;

export default Title;
